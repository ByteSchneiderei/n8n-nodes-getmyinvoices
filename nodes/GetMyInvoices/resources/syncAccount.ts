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
                    request: {
                        method: 'GET',
                        url: '/syncAccounts',
                    },
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
                resource: ['syncAccount'],
                operation: ['getAll'],
            },
        },
        options: [
            {
                displayName: 'Search Filter',
                name: 'searchFilter',
                type: 'string',
                default: '',
                description: 'Search sync accounts by name',
                routing: {
                    send: {
                        type: 'query',
                        property: 'searchFilter',
                    },
                },
            },
            {
                displayName: 'Status Filter',
                name: 'statusFilter',
                type: 'string',
                default: '',
                description: 'Search sync status (e.g., Active, Inactive)',
                routing: {
                    send: {
                        type: 'query',
                        property: 'statusFilter',
                    },
                },
            },
            {
                displayName: 'Type Filter',
                name: 'typeFilter',
                type: 'string',
                default: '',
                description: 'Search sync type (e.g., Import, Export)',
                routing: {
                    send: {
                        type: 'query',
                        property: 'typeFilter',
                    },
                },
            },
        ],
    },
];