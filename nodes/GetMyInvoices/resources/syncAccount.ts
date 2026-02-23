import type { INodeProperties } from 'n8n-workflow';

export const syncAccountDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['syncAccount'],
            },
        },
        options: [
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get many sync accounts',
                routing: {
                    request: { method: 'GET', url: '/syncAccounts' },
                },
            },
            {
                name: 'Get',
                value: 'get',
                action: 'Get a sync account',
                routing: {
                    request: { method: 'GET', url: '=/syncAccounts/{{$parameter.syncAccountId}}' },
                },
            },
        ],
        default: 'getAll',
    },
    {
        displayName: 'Sync Account ID',
        name: 'syncAccountId',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['syncAccount'],
                operation: ['get'],
            },
        },
        default: '',
        description: 'The ID of the sync account to retrieve',
    },
];