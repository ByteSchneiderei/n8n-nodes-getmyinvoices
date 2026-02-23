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
                    request: { method: 'GET', url: '/bankAccounts' },
                },
            },
        ],
        default: 'getAll',
    },
];