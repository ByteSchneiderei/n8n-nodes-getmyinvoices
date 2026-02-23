import type { INodeProperties } from 'n8n-workflow';

export const metaDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['meta'],
            },
        },
        options: [
            {
                name: 'Get Account Details',
                value: 'getAccount',
                action: 'Get account details',
                routing: {
                    request: { method: 'GET', url: '/account' },
                },
            },
            {
                name: 'Get All Countries',
                value: 'getCountries',
                action: 'Get all countries',
                routing: {
                    request: { method: 'GET', url: '/countries' },
                },
            },
            {
                name: 'Get All Currencies',
                value: 'getCurrencies',
                action: 'Get all currencies',
                routing: {
                    request: { method: 'GET', url: '/currencies' },
                },
            },
            {
                name: 'Get All Desktop Portals',
                value: 'getDesktopPortals',
                action: 'Get all desktop portals',
                routing: {
                    request: { method: 'GET', url: '/desktopPortals' },
                },
            },
            {
                name: 'Get All Tags',
                value: 'getTags',
                action: 'Get all tags',
                routing: {
                    request: { method: 'GET', url: '/tags' },
                },
            },
            {
                name: 'Get All Users',
                value: 'getUsers',
                action: 'Get all users',
                routing: {
                    request: { method: 'GET', url: '/users' },
                },
            },
            {
                name: 'Get All Vat Rates',
                value: 'getVatRates',
                action: 'Get all vat rates',
                routing: {
                    request: { method: 'GET', url: '/vatRates' },
                },
            },
            {
                name: 'Get Many Portals',
                value: 'getPortals',
                action: 'Get many portals',
                routing: {
                    request: { method: 'GET', url: '/portals' },
                },
            },
        ],
        default: 'getAccount',
    },
    {
        displayName: 'Page Number',
        name: 'pageNumber',
        type: 'number',
        displayOptions: {
            show: {
                resource: ['meta'],
                operation: ['getPortals'],
            },
        },
        typeOptions: {
            minValue: 1,
        },
        default: 1,
        description: 'If there are more portals than the 500 limit you can use this to get additional pages',
        routing: {
            send: {
                type: 'query',
                property: 'pageNumber',
            },
        },
    },
];