import type CloudKit from 'tsl-apple-cloudkit';

const container = window.CloudKit
    .configure( {
        containers: [{
            containerIdentifier: '',
            environment: 'development',
            apiTokenAuth: {
                apiToken: ''
            }
        }]
    } )
    .getDefaultContainer();

function onAuthenticate ( result?: unknown )
{
    console.log( 'onAuthenticate', result );
    const error = result as CloudKit.CKError;

    if ( error && error.ckErrorCode === 'AUTH_PERSIST_ERROR' )
    {
        console.error( error );
    }

    console.log( 'Unauthenticated User' );
    container
        .whenUserSignsIn()
        .then( onAuthorized )
        .catch( onAuthenticate );
}

function onAuthorized ( userInfo: CloudKit.UserIdentity )
{
    console.log( 'onAuthorized', userInfo );

    const output = document.getElementById( 'user-info' );

    if ( output )
    {
        output.innerText = JSON.stringify( userInfo, null, '  ' );
    }

    container
        .whenUserSignsOut()
        .then( onAuthenticate );
}

container
    .setUpAuth()
    .then( function ( userInfo )
    {
        // userInfo is the signed-in user or null.
        console.log( 'setUpAuth', userInfo );

        // Either a sign-in or a sign-out button was added to the DOM.
        if ( userInfo )
        {
            onAuthorized( userInfo );
        }
        else
        {
            onAuthenticate( userInfo );
        }
    } );
