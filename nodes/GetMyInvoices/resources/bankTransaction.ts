import type {INodeProperties} from 'n8n-workflow';

export const bankTransactionDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['bankTransaction'],
            },
        },
        options: [
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get many bank transactions',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/bankTransactions',
                    },
                    output: {
                        postReceive: [
                            {
                                type: 'rootProperty',
                                properties: {
                                    property: 'records',
                                },
                            },
                        ],
                    },
                },
            },
        ],
        default: 'getAll',
    },
    {
        displayName: 'Bank Account UIDs',
        name: 'bankAccountsUid',
        type: 'string',
        default: '',
        required: true,
        placeholder: 'e.g. 5, 10, 15',
        description: 'The unique identifiers of the bank accounts (comma-separated)',
        displayOptions: {
            show: {
                resource: ['bankTransaction'],
                operation: ['getAll'],
            },
        },
        routing: {
            send: {
                preSend: [
                    async function(this, requestOptions) {
                        // Den Wert holen und sicherstellen, dass es ein String ist
                        const rawValue = this.getNodeParameter('bankAccountsUid', '');
                        const value = String(rawValue); // <--- Das hier erzwingt den String-Typ

                        if (value && value.trim().length > 0) {
                            // 1. IDs säubern und in Array wandeln
                            const ids = value.split(',')
                                .map(id => id.trim())
                                .filter(id => id.length > 0);

                            // 2. Query-String manuell bauen, um n8n-Indizes zu verhindern
                            // Ergebnis: bankAccountsUid[]=123&bankAccountsUid[]=456
                            const queryPart = ids.map(id => `bankAccountsUid[]=${id}`).join('&');

                            // 3. An URL anhängen
                            const separator = requestOptions.url.includes('?') ? '&' : '?';
                            requestOptions.url += `${separator}${queryPart}`;
                        }
                        return requestOptions;
                    },
                ],
            },
        },
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: {
            show: {
                resource: ['bankTransaction'],
                operation: ['getAll'],
            },
        },
        options: [
            {
                displayName: 'End Date Filter',
                name: 'endDateFilter',
                type: 'dateTime',
                default: '',
                routing: { send: { type: 'query', property: 'endDateFilter' } },
            },
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                typeOptions: { minValue: 1 },
                default: 50,
                description: 'Max number of results to return',
                routing: { send: { type: 'query', property: 'limit' } },
            },
            {
                displayName: 'Offset',
                name: 'offset',
                type: 'number',
                typeOptions: { minValue: 0 },
                default: 0,
                description: 'The number of items to skip before starting to collect the result set',
                routing: { send: { type: 'query', property: 'offset' } },
            },
            {
                displayName: 'Start Date Filter',
                name: 'startDateFilter',
                type: 'dateTime',
                default: '',
                routing: { send: { type: 'query', property: 'startDateFilter' } },
            },
            {
                displayName: 'Status Filter',
                name: 'statusFilter',
                type: 'string',
                default: '',
                description: 'Search status',
                routing: { send: { type: 'query', property: 'statusFilter' } },
            },
            {
                displayName: 'Text Filter',
                name: 'textFilter',
                type: 'string',
                default: '',
                description: 'Search string',
                routing: { send: { type: 'query', property: 'textFilter' } },
            },
        ],
    },
];