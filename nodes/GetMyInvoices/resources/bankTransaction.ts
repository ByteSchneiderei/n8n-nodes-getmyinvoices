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
            {
                name: 'Get',
                value: 'get',
                action: 'Get a bank transaction',
                routing: {
                    request: { method: 'GET', url: '=/bankTransactions/{{$parameter.transactionId}}' },
                },
            },
        ],
        default: 'getAll',
    },
    {
        displayName: 'Transaction ID',
        name: 'transactionId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['bankTransaction'],
                operation: ['get'],
            },
        },
        default: '',
        description: 'The ID of the bank transaction to retrieve',
    },
    // Optional: Query-Parameter für Filterung bei Get Many
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: {
            show: {
                resource: ['bankTransaction'],
                operation: ['getAll'],
            },
        },
        options: [
            {
                displayName: 'Bank Account ID',
                name: 'bankAccountId',
                type: 'string',
                default: '',
                routing: { send: { type: 'query', property: 'bank_account_uid' } },
                description: 'Filter transactions by a specific bank account UID',
            },
            {
                displayName: 'Limit',
                name: 'limit',
                type: 'number',
                typeOptions: {
                    minValue: 1,
                },
                description: 'Max number of results to return',
                default: 50,
                routing: { send: { type: 'query', property: 'per_page' } },
            },
        ],
    },
];