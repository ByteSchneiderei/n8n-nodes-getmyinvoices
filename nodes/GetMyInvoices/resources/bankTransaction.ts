import type { INodeProperties } from 'n8n-workflow';

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
                    request: { method: 'GET', url: '/bankTransactions' },
                },
            },
        ],
        default: 'getAll',
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
                displayName: 'Bank Account UIDs',
                name: 'bankAccountsUid',
                type: 'string',
                default: '',
                description: 'Comma-separated list of Bank Account UIDs',
                routing: {
                    send: {
                        type: 'query',
                        property: 'bankAccountsUid[]',
                        value: '={{$value.split(",").map(id => id.trim())}}',
                    },
                },
            },
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