import type { INodeProperties } from 'n8n-workflow';

export const bankAccountDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['bankAccount'],
            },
        },
        options: [
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get many bank accounts',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/bankAccounts',
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
            {
                name: 'Get Transaction',
                value: 'getTransaction',
                action: 'Get all transactions of one bank account',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/bankAccounts/{{$parameter["bankAccountUid"]}}/transactions',
                    },
                },
            },
            {
                name: 'Get Transaction By ID',
                value: 'getTransactionById',
                action: 'Get a specific transaction for a bank account',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/bankAccounts/{{$parameter["bankAccountUid"]}}/transactions/{{$parameter["transactionUid"]}}',
                    },
                },
            },
            {
                name: 'Get Assigned Documents',
                value: 'getAssignedDocuments',
                action: 'Get assigned documents of a transaction',
                routing: {
                    request: {
                        method: 'GET',
                        url: 'https://api.getmyinvoices.com/accounts/v3/bankAccounts/{{$parameter["bankAccountUid"]}}/transactions/{{$parameter["transactionUid"]}}/assign',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    {
        displayName: 'Bank Account UID',
        name: 'bankAccountUid',
        type: 'string',
        displayOptions: {
            show: {
                operation: ['getTransaction', 'getTransactionById', 'getAssignedDocuments'],
            },
        },
        default: '',
        required: true,
        description: 'The unique identifier of the bank account',
    },
    {
        displayName: 'Transaction UID',
        name: 'transactionUid',
        type: 'string',
        displayOptions: {
            show: {
                operation: ['getTransactionById', 'getAssignedDocuments'],
            },
        },
        default: '',
        required: true,
        description: 'The unique identifier of the transaction',
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: {
            show: {
                resource: ['bankAccount'],
                operation: ['getTransaction'],
            },
        },
        options: [
            {
                displayName: 'End Date',
                name: 'endDateFilter',
                type: 'dateTime',
                description: 'Filter transactions up to this date',
                default: '',
                routing: {
                    send: {
                        type: 'query',
                        property: 'endDateFilter',
                    },
                },
            },
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                typeOptions: { minValue: 1, maxValue: 500 },
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
                displayName: 'Sort Direction',
                name: 'sortDirection',
                type: 'options',
                options: [
                    { name: 'Ascending', value: 'ASC' },
                    { name: 'Descending', value: 'DESC' },
                ],
                default: 'DESC',
                routing: { send: { type: 'query', property: 'sortDirection' } },
            },
            {
                displayName: 'Sort Order',
                name: 'sortOrder',
                type: 'options',
                options: [
                    { name: 'Booking Date', value: 'bookingDate' },
                    { name: 'Transaction UID', value: 'transactionUid' },
                ],
                default: 'bookingDate',
                routing: { send: { type: 'query', property: 'sortOrder' } },
            },
            {
                displayName: 'Start Date',
                name: 'startDateFilter',
                type: 'dateTime',
                description: 'Filter transactions starting from this date',
                default: '',
                routing: {
                    send: {
                        type: 'query',
                        property: 'startDateFilter',
                    },
                },
            },
            {
                displayName: 'Status',
                name: 'statusFilter',
                type: 'options',
                options: [
                    { name: 'Assigned', value: 'ASSIGNED' },
                    { name: 'Has Suggestions', value: 'HAS_SUGGESTIONS' },
                    { name: 'Ignored', value: 'IGNORED' },
                    { name: 'Unassigned', value: 'UNASSIGNED' },
                    { name: 'Unknown', value: 'UNKNOWN' },
                ],
                description: 'Filter transactions by status',
                default: 'ASSIGNED',
                routing: {
                    send: {
                        type: 'query',
                        property: 'statusFilter',
                    },
                },
            },
            {
                displayName: 'Text Search',
                name: 'textFilter',
                type: 'string',
                default: '',
                description: 'Search string to filter transactions by text',
                routing: { send: { type: 'query', property: 'textFilter' } },
            },
        ],
    },
];

