import {
    IAuthenticateGeneric, type Icon,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class GetMyInvoicesApi implements ICredentialType {
    name = 'getMyInvoicesApi';
    displayName = 'GetMyInvoices API';
    icon: Icon = 'file:../icons/getmyinvoices_logo.svg';
    documentationUrl = 'https://api.getmyinvoices.com/accounts/v3/doc/index.html';

    properties: INodeProperties[] = [
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: { password: true },
            default: '',
            required: true,
            description: 'The API key for GetMyInvoices v3. Found under "API access" in your account.',
        },
    ];

    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                'X-API-KEY': '={{$credentials.apiKey}}',
            },
        },
    };

    test: ICredentialTestRequest = {
        request: {
            baseURL: 'https://api.getmyinvoices.com/accounts/v3',
            url: '/account',
            method: 'GET',
        },
    };
}