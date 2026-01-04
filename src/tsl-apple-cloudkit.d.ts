/*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*!*\

  Apple CloudKit TypeScript Library

  Copyright (c) TypeScriptLibs and Contributors

  Licensed under the MIT License; you may not use this file except in
  compliance with the License. You may obtain a copy of the MIT License at
  https://typescriptlibs.eu/LICENSE.txt

\*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*i*/

/**
 * Provides access from your web app to your CloudKit app’s containers and
 * databases. Use the CloudKit namespace to configure CloudKit JS, and to
 * access app containers and global constants.
 */
declare module CloudKit
{
    /////
    //
    //  Classes
    //
    /////

    /**
     * A CKError object encapsulates an error that may occur when you use
     * CloudKit JS. This includes CloudKit server errors and local errors.
     */
    export class CKError
    {
        /**
         * You don’t have permission to access the endpoint, record, zone, or
         * database.
         */
        static readonly ACCESS_DENIED: string;

        /**
         * An atomic batch operation failed.
         */
        static readonly ATOMIC_ERROR: string;

        /**
         * Authentication was rejected.
         */
        static readonly AUTHENTICATION_FAILED: string;

        /**
         * The request requires authentication but none was provided.
         */
        static readonly AUTHENTICATION_REQUIRED: string;

        /**
         * The authentication persistently failes.
         * A login is required.
         */
        static readonly AUTH_PERSIST_ERROR: string;

        /**
         * The request was not valid.
         */
        static readonly BAD_REQUEST: string;

        /**
         * The configuration was not valid.
         */
        static readonly CONFIGURATION_ERROR: string;

        /**
         * The recordChangeTag value expired.
         * Retry the request with the latest tag.
         */
        static readonly CONFLICT: string;

        /**
         * The resource that you attempted to create already exists.
         */
        static readonly EXISTS: string;

        /**
         * An internal error occurred.
         */
        static readonly INTERNAL_ERROR: string;

        /**
         * The parameters you provided for this method are invalid.
         */
        static readonly INVALID_ARGUMENTS: string;

        /**
         * A network error occurred, such as a connection time out.
         */
        static readonly NETWORK_ERROR: string;

        /**
         * The resource was not found.
         */
        static readonly NOT_FOUND: string;

        /**
         * If accessing the public database, you exceeded the app’s quota. If
         * accessing the private database, you exceeded the user’s iCloud
         * quota.
         */
        static readonly QUOTA_EXCEEDED: string;

        /**
         * The CloudKit service could not be reached.
         */
        static readonly SERVICE_UNAVAILABLE: string;

        /**
         * The share UI failed to load and timed out.
         */
        static readonly SHARE_UI_TIMEOUT: string;

        /**
         * The user failed to sign in.
         */
        static readonly SIGN_IN_FAILED: string;

        /**
         * The request was throttled.
         * Try the request again later.
         */
        static readonly THROTTLED: string;

        /**
         * An internal error occurred.
         * Try the request again.
         */
        static readonly TRY_AGAIN_LATER: string;

        /**
         * CloudKit JS was not able to decode the server response.
         */
        static readonly UNEXPECTED_SERVER_RESPONSE: string;

        /**
         * The server rejected the request because there was a conflict with a
         * unique field.
         */
        static readonly UNIQUE_FIELD_ERROR: string;

        /**
         * An unknown error occurred.
         * For example, if the server returns an error that is not recognized
         * by the version of CloudKit JS you are using.
         */
        static readonly UNKNOWN_ERROR: string;

        /**
         * The request violates a validating reference constraint.
         */
        static readonly VALIDATING_REFERENCE_ERROR: string;

        /**
         * The zone specified in the request was not found.
         */
        static readonly ZONE_NOT_FOUND: string;

        /**
         * The error code for this error.
         */
        readonly ckErrorCode: string;

        /**
         * The extension error code for this error.
         */
        readonly extensionErrorCode: string;

        /**
         * A Boolean value indicating whether this is a CloudKit error object.
         */
        readonly isCKError: boolean;

        /**
         * A Boolean value indicating whether this is an error object.
         */
        readonly isError: boolean;

        /**
         * A Boolean value indicating whether a server error occurred.
         */
        readonly isServerError: boolean;

        /**
         * A Boolean value indicating whether a server extension error
         * occurred.
         */
        readonly isServerExtensionError: boolean;

        /**
         * A description of the error that occurred.
         */
        readonly reason: string;

        /**
         * The name of the record that the operation failed on. This property
         * value is Undefined if the error is unrelated to a record operation.
         */
        readonly recordName: ( string | undefined );

        /**
         * A redirect URL for the user to securely sign in with the user’s
         * Apple ID.
         */
        readonly redirectURL: string;

        /**
         * The suggested seconds to wait before trying this operation again.
         */
        readonly retryAfter: number;

        /**
         * The error code generated by the server.
         */
        readonly serverErrorCode: string;

        /**
         * A string that is a unique identifier for the subscription where the
         * error occurred. This property value is Undefined if the error is
         * unrelated to a subscription operation.
         */
        readonly subscriptionID: ( string | undefined );

        /**
         * A unique identifier for this error.
         */
        readonly uuid: string;

        /**
         * The record zone in the database where the error occurred. This
         * property value is Undefined if the error is unrelated to a zone
         * operation.
         */
        readonly zoneID: ( ZoneID | undefined );

        /**
         * Returns a JSON representation of this object.
         *
         * @return {JSON}
         * A JSON representation of this CKError object.
         */
        toJSON (): JSON;

        /**
         * Returns a string representation of this object.
         *
         * @return {string}
         * A string representation of this CKError object.
         */
        toString (): string;
    }

    /**
     * Represents the configured CloudKit object.
     */
    export class CloudKit
    {
        /**
         * Returns all the containers that were configured.
         *
         * @return {Array<Container>}
         * All the configured containers.
         */
        getAllContainers (): Array<Container>;

        /**
         * Returns the container with the specified container ID.
         *
         * @param {string} containerIdentifier
         * The identifier for the container you want to get.
         *
         * @return {Container|undefined}
         * The container with the specified container ID if it exists;
         * otherwise, the value is undefined.
         */
        getContainer ( containerIdentifier: string ): ( Container | undefined );

        /**
         * Returns the default container.
         *
         * @return {Container}
         * The default container (the first container that appears in the
         * configuration list of containers).
         */
        getDefaultContainer (): Container;
    }

    /**
     * A Container object provides access to an app container, and through the
     * app container, access to its databases. It also contains methods for
     * authenticating and fetching users.
     */
    export class Container
    {
        /**
         * The Apple Push Notification service (APNs) environment associated
         * with this container.
         */
        apnsEnvironment: ( typeof DEVELOPMENT_ENVIRONMENT | typeof PRODUCTION_ENVIRONMENT );

        /**
         * The string that identifies the app’s container.
         */
        containerIdentifier: string;

        /**
         * The container environment, either development or production.
         */
        environment: ( typeof DEVELOPMENT_ENVIRONMENT | typeof PRODUCTION_ENVIRONMENT );

        /**
         * Boolean value indicating whether this container is registered to
         * receive push notifications.
         */
        isRegisteredForNotifications: boolean;

        /**
         * The database containing the user’s private data.
         */
        privateCloudDatabase: Database;

        /**
         * The database containing the data shared by all users.
         */
        publicCloudDatabase: Database;

        /**
         * The database containing shared records accepted by the current user.
         */
        sharedCloudDatabase: Database;

        /**
         * Accepts a share, that is represented by a shortGUID, on behalf of
         * the current user.
         *
         * @param {Array<string>} shortGUIDs
         * One or more short GUIDs that represent shared records.
         *
         * @return {Promise<RecordInfosResponse, CKError>}
         * A Promise object that resolves to a RecordInfosResponse object, or
         * rejects to a CKError object.
         */
        acceptShares ( shortGUIDs: Array<string> ): Promise<RecordInfosResponse, CKError>;

        /**
         * Adds a function to call when a push notification occurs.
         *
         * @param {Function} listener
         * The function to call when a push notification occurs. The function
         * must have a single argument that is a Notification object.
         */
        addNotificationListener ( listener: Function ): void;

        /**
         * Fetches all user identities in the current user’s address book.
         *
         * @return {Promise<UserIdentitiesResponse,CKError>}
         * A Promise object that resolves to a UserIdentitiesResponse object,
         * or rejects to a CKError object.
         */
        discoverAllUserIdentities (): Promise<UserIdentitiesResponse, CKError>;

        /**
         * Fetches all users in the specified array.
         *
         * @param {Array<UserLookupInfo>} userLookupInfos
         * Array of information about users to fetch.
         *
         * @return {Promise<UserIdentitiesResponse, CKError>}
         * A Promise object that resolves to a UserIdentitiesResponse object,
         * or rejects to a CKError object.
         */
        discoverUserIdentities ( userLookupInfos: Array<UserLookupInfo> ): Promise<UserIdentitiesResponse, CKError>;

        /**
         * Fetches information about a single user based on the user’s email
         * address.
         *
         * @param {string} emailAddress
         * The user’s email address.
         *
         * @return {Promise<UserIdentitiesResponse, CKError>}
         * A Promise object that resolves to UserIdentitiesResponse object, or
         * rejects to a CKError object.
         */
        discoverUserIdentityWithEmailAddress ( emailAddress: string ): Promise<UserIdentitiesResponse, CKError>;

        /**
         * Fetches information about a single user based on the user’s phone
         * number.
         *
         * @param {string} phoneNumber
         * The user’s phone number.
         *
         * @return {Promise<UserIdentitiesResponse, CKError>}
         * A Promise object that resolves to UserIdentitiesResponse object, or
         * rejects to a CKError object.
         */
        discoverUserIdentityWithPhoneNumber ( phoneNumber: string ): Promise<UserIdentitiesResponse, CKError>;

        /**
         * Fetches information about a single user using the record name.
         *
         * @param {string} userRecordName
         * The name of the user record.
         *
         * @return {Promise<UserIdentitiesResponse, CKError>}
         * A Promise object that resolves to UserIdentitiesResponse object, or
         * rejects to a CKError object.
         */
        discoverUserIdentityWithUserRecordName ( userRecordName: string ): Promise<UserIdentitiesResponse, CKError>;

        /**
         * Fetches information about the current user asynchronously.
         *
         * @return {Promise<UserIdentity, CKError>}
         * A Promise object that resolves to a UserIdentity dictionary if the
         * current user is found, or rejects to a CKError object.
         */
        fetchCurrentUserIdentity (): Promise<UserIdentity, CKError>;

        /**
         * Returns information about a record for which you have a shortGUID
         * property.
         *
         * @param {Array<string>} shortGUIDs
         * One or more short GUIDs that represent records you want to fetch
         * information about.
         *
         * @return {Promise<RecordInfosResponse, CKError>}
         * A Promise object that resolves to a RecordInfosResponse object, or
         * rejects to a CKError object.
         */
        fetchRecordInfos ( shortGUIDs: Array<string> ): Promise<RecordInfosResponse, CKError>;

        /**
         * Returns information about the configuration of the container.
         *
         * @return {ClientContainerConfig|ServerContainerConfig}
         * The ContainerConfig object of the Container object.
         */
        getConfig (): ( ClientContainerConfig | ServerContainerConfig | ContainerConfigLike );

        /**
         * Returns the specified (public, private, or shared) database.
         *
         * @param {DatabaseScope} databaseScope
         * Specifies the type of database to return.
         *
         * @return {Database}
         * The specified database.
         */
        getDatabaseWithDatabaseScope ( databaseScope: DatabaseScope ): Database;

        /**
         * Registers to receive push notifications.
         *
         * @return {Promise<Container, CKError>}
         * A Promise object that resolves to the Container object, or rejects
         * to a CKError object.
         */
        registerForNotifications (): Promise<Container, CKError>;

        /**
         * Removes a function, that usually would be called, when a push
         * notification occurs.
         *
         * @param {Function} listener
         * The function, that was added for push notifications.
         */
        removeNotificationListener ( listener: Function ): void;

        /**
         * Determines whether a user is signed in and presents an appropriate
         * sign in or sign out button.
         *
         * @return {Promise<(UserIdentity|null),CKError>}
         * A Promise object that resolves to a UserIdentity dictionary, if an
         * active CloudKit session was found; otherwise, null.
         */
        setUpAuth (): Promise<( UserIdentity | null ), CKError>;

        /**
         * Returns a string representation of this Container object.
         */
        toString (): string;

        /**
         * Unregisters to receive push notifications.
         */
        unregisterForNotifications (): void;

        /**
         * Returns an object representing a deferred or asynchronous operation
         * that resolves when the user signs in.
         *
         * @return {Promise<UserIdentity,CKError>}
         * A Promise object that resolves to a UserIdentity dictionary when the
         * user signs in, or rejects to a CKError object.
         */
        whenUserSignsIn (): Promise<UserIdentity, CKError>;

        /**
         * Returns an object representing a deferred or asynchronous operation
         * that resolves when the user signs out.
         *
         * @return {Promise<undefined,CKError>}
         * A Promise object that resolves to undefined when the user signs out,
         * or rejects to a CKError object.
         */
        whenUserSignsOut (): Promise<undefined, CKError>;
    }

    /**
     * A Database object represents a public or private database in an app
     * container.
     */
    export class Database
    {
        /**
         * A unique identifier for the container that this database resides in.
         */
        readonly containerIdentifier: string;

        /**
         * The type of database (public, private, or shared).
         */
        readonly databaseScope: DatabaseScope;

        /**
         * Deletes the specified zones.
         *
         * @param {(Array<string>|Array<ZoneID>)} zones
         * An array of names of zones or an array of zone ids to delete.
         *
         * @return {Promise<RecordZonesResponse, CKError>}
         * A Promise object that resolves to a RecordZonesResponse object if
         * the operation succeeds; otherwise, a CKError object.
         */
        deleteRecordZones ( zones: ( Array<string> | Array<ZoneID> ) ): Promise<RecordZonesResponse, CKError>;

        /**
         * Deletes one or more records.
         *
         * @param {(Array<string>|Array<RecordToDelete>)} records
         * Possible values to delete are an array of names of records or an
         * array of records.
         *
         * @param {RecordDeleteOptions} options
         * A dictionary containing a single zoneID key that identifies the zone
         * in the database where the record resides. If the options parameter
         * is omitted, the default zone is used.
         *
         * @return {Promise<RecordsResponse, CKError>}
         * A Promise object that resolves to a RecordsResponse object if the
         * operation succeeds; otherwise, a CKError object.
         */
        deleteRecords ( records: ( Array<string> | Array<RecordToDelete> ), options?: RecordDeleteOptions ): Promise<RecordsResponse, CKError>;

        /**
         * Deletes one or more subscriptions.
         *
         * @param {Array<Subscription>} subscriptions
         * Possible values to delete are an array of subscriptions.
         *
         * @return {Promise<SubscriptionsResponse, CKError>}
         * A Promise object that resolves to a SubscriptionsResponse object, or
         * rejects to a CKError object.
         */
        deleteSubscriptions ( subscriptions: Array<Subscription> ): Promise<SubscriptionsResponse, CKError>;

        /**
         * Fetch all zones in the database.
         *
         * @return {Promise<RecordZonesResponse, CKError>}
         * A Promise object that resolves to a RecordZonesResponse object or if
         * it fails, a CKError object.
         */
        fetchAllRecordZones (): Promise<RecordZonesResponse, CKError>;

        /**
         * Fetches all subscriptions in the schema.
         *
         * @return {Promise<SubscriptionsResponse, CKError>}
         * A Promise object that resolves to a SubscriptionsResponse object, or
         * rejects to a CKError object.
         */
        fetchAllSubscriptions (): Promise<SubscriptionsResponse, CKError>;

        /**
         * Fetch changed record zones in the database.
         *
         * @param {DatabaseFetchOptions} options
         * Options to fetch database changes.
         *
         * @return {Promise<DatabaseChangesResponse, CKError>}
         * A Promise object that resolves to a DatabaseChangesResponse object,
         * or rejects to a CKError object.
         */
        fetchDatabaseChanges ( options?: DatabaseFetchOptions ): Promise<DatabaseChangesResponse, CKError>;

        /**
         * Fetch changes to the specified record zones in the database.
         *
         * @param {Array<RecordZoneChangesOptions>} options
         * Specifies the zones and what data to fetch from each.
         *
         * @return {Promise<RecordZoneChangesResponse, CKError>}
         * A Promise object that resolves to a RecordZoneChangesResponse
         * object, or rejects to a CKError object.
         */
        fetchRecordZoneChanges ( options: Array<RecordZoneChangesOptions> ): Promise<RecordZoneChangesResponse, CKError>;

        /**
         * Fetches one or more zones.
         *
         * @param {(Array<string>|Array<RecordZone>)} zones
         * Possible values to fetch are an array of names of zones or an array
         * of record zones.
         *
         * @return {Promise<RecordZonesResponse, CKError>}
         * A Promise object that resolves to a RecordZonesResponse object if
         * the operation succeeds; otherwise, a CKError object.
         */
        fetchRecordZones ( zones: ( Array<string> | Array<RecordZone> ) ): Promise<RecordZonesResponse, CKError>;

        /**
         * Fetches one or more records.
         *
         * @param {(Array<string>|Array<RecordLike>)} records
         * Possible values to fetch are an array of names of records or an
         * array of records.
         *
         * @param {RecordFetchOptions} options
         * A dictionary containing options to use when fetching records.
         *
         * @return {Promise<RecordsResponse, CKError>}
         * A Promise object that resolves to a RecordsResponse object if the
         * operation succeeds; otherwise, a CKError object.
         */
        fetchRecords ( records: ( Array<string> | Array<RecordLike> ), options?: RecordFetchOptions ): Promise<RecordsResponse, CKError>;

        /**
         * Fetches one or more subscriptions.
         *
         * @param {Array<Subscription>} subscriptions
         * Possible values to fetch are an array of subscriptions.
         *
         * @return {Promise<SubscriptionsResponse, CKError>}
         * A Promise object that resolves to a SubscriptionsResponse object, or
         * rejects to a CKError object.
         */
        fetchSubscriptions ( subscriptions: Array<Subscription> ): Promise<SubscriptionsResponse, CKError>;

        /**
         * Creates records batch builder object for modifying multiple records.
         *
         * @param {RecordModifiyOptions} options
         * A dictionary containing options to use when modifying records.
         *
         * @return {RecordsBatchBuilder}
         * A RecordsBatchBuilder object for this database.
         */
        newRecordsBatch ( options?: RecordModifyOptions ): RecordsBatchBuilder;

        /**
         * Fetches records using a query.
         *
         * @param {Query|QueryResponse} query
         * Either a Query dictionary or a QueryResponse object describing the
         * matching criteria.
         *
         * @param {RecordFetchOptions} options
         * A dictionary containing options to use when fetching records.
         *
         * @return {Promise<QueryResponse, CKError>}
         * A Promise object that resolves to a QueryResponse object if the
         * operation succeeds; otherwise, a CKError object.
         */
        performQuery ( query: ( Query | QueryResponse ), options?: RecordFetchOptions ): Promise<QueryResponse, CKError>;

        /**
         * Creates one or more zones in the database.
         *
         * @param {Array<string>} zones
         * Possible values to save are an array of names of zones.
         *
         * @return {Promise<RecordZonesResponse,CKError>}
         * A Promise object that resolves to a RecordZonesResponse object if
         * the operation succeeds; otherwise, a CKError object.
         */
        saveRecordZones ( zones: Array<string> ): Promise<RecordZonesResponse, CKError>;

        /**
         * Saves records to the database.
         *
         * @param {(Array<RecordToSave>|Array<RecordToCreate>|Array<RecordLike>)} records
         * Possible values to save are a an array of records.
         *
         * @param {RecordSaveOptions} options
         * A dictionary containing options to use when saving records.
         *
         * @return {Promise<RecordsResponse, CKError>}
         * A Promise object that resolves to a RecordZonesResponse object, or
         * if the operation fails, a CKError object.
         */
        saveRecords ( records: ( Array<RecordToSave> | Array<RecordToCreate> | Array<RecordLike> ), options?: RecordSaveOptions ): Promise<RecordsResponse, CKError>;

        /**
         * Saves one or more subscriptions to record changes.
         *
         * @param {Array<Subscription>} subscriptions
         * Possible values to save are an array of subscriptions.
         *
         * @return {Promise<SubscriptionsResponse, CKError>}
         * A Promise object that resolves to a SubscriptionsResponse object if
         * the operation succeeds; otherwise, a CKError object.
         */
        saveSubscriptions ( subscriptions: Array<Subscription> ): Promise<SubscriptionsResponse, CKError>;

        /**
         * Presents a UI to the user which lets them share a record with other
         * users.
         *
         * @param {SharingUIOptions} options
         * A dictionary containing options for the share UI.
         *
         * @return {Promise<SharingUIResult, CKError>}
         * A Promise object that resolves to an object that represents the
         * share record, or rejects to a CKError object.
         */
        shareWithUI ( options: SharingUIOptions ): Promise<SharingUIResult, CKError>;

        /**
         * Returns a string representation of this object.
         *
         * @return {string}
         * A string representation of this Database object.
         */
        toString (): string;
    }

    /**
     * A DatabaseChangesResponse object encapsulates the results of fetching
     * changed record zones in a database.
     */
    export class DatabaseChangesResponse extends Response
    {
        /**
         * A Boolean value indicating whether this object is an instance of the
         * DatabaseChangesResponse class.
         */
        readonly isDatabaseChangesResponse: boolean;

        /**
         * A Boolean value that indicates there are more database changes to
         * fetch.
         */
        readonly moreComing: boolean;

        /**
         * The maximum number of records to fetch.
         */
        readonly resultsLimit: number;

        /**
         * A point in the database’s change history.
         */
        readonly syncToken: string;

        /**
         * The zones in the database where the changes occurred.
         */
        readonly zones: Array<RecordZoneChangesOptions>;
    }

    /**
     * A Notification object represents a push notification that was sent to
     * your app. Notifications are triggered by subscriptions that you save to
     * the database. To subscribe to record changes and handle push
     * notifications, see the saveSubscriptions method in Database.
     */
    export class Notification
    {
        /**
         * A key to get a localized right button title that appears in the
         * alert dialog.
         */
        readonly alertActionLocalizationKey: string;

        /**
         * The text of the alert message.
         */
        readonly alertBody: string;

        /**
         * The filename of an image file in the app bundle used as a launch
         * image.
         */
        readonly alertLaunchImage: string;

        /**
         * Array of strings that appear as variables if alertLocalizationKey is
         * a format specifier.
         */
        readonly alertLocalizationArgs: Array<string>;

        /**
         * A key to a localized alert message.
         */
        readonly alertLocalizationKey: string;

        /**
         * The badge number to display.
         */
        readonly badge: number;

        /**
         * Name of the action group corresponding to this notification.
         */
        readonly category: string;

        /**
         * The identifier of the container that generated this notification.
         */
        readonly containerIdentifier: string;

        /**
         * Boolean value indicating whether this push notification is a query
         * notification.
         */
        readonly isQueryNotification: boolean;

        /**
         * Boolean value indicating whether this notification is a push
         * notification that was sent because of changes to a record zone.
         */
        readonly isRecordZoneNotification: boolean;

        /**
         * A unique identifier for this notification.
         */
        readonly notificationID: string;

        /**
         * The type of notification.
         *
         * - `NOTIFICATION_TYPE_QUERY` - A notification generated based on the
         *   conditions set forth in a subscription object.
         *
         * - `NOTIFICATION_TYPE_RECORD_ZONE` - A notification generated when the
         *   contents of a record zone changed.
         */
        readonly notificationType: ( 'NOTIFICATION_TYPE_QUERY' | 'NOTIFICATION_TYPE_RECORD_ZONE' );

        /**
         * The name of a sound file in the app bundle to play as an alert.
         */
        readonly soundName: string;

        /**
         * The identifier for the associated subscription.
         */
        readonly subscriptionID: string;

        /**
         * The identifier of the zone that this notification belongs to.
         */
        readonly zoneID: ZoneID;
    }

    /**
     * A QueryNotification object represents a push notification that was
     * generated by a subscription object. A query notification is triggered by
     * subscriptions where the subscriptionType key is query. Use a
     * QueryNotification object to get information about the record that
     * changed. To create query subscriptions and handle push notifications,
     * see the saveSubscriptions method in Database.
     */
    export class QueryNotification extends Notification
    {
        /**
         * Boolean value indicating whether the notification is from the public
         * database.
         */
        readonly isPublicDatabase: boolean;

        /**
         * Boolean value indicating whether this notification is a
         * CloudKit.QueryNotification object.
         */
        readonly isQueryNotification: boolean;

        /**
         * Indicating the type of event that generated the push notification.
         *
         * QUERY_NOTIFICATION_REASON_RECORD_CREATED - A record matching the
         * subscription’s predicate was created.
         *
         * QUERY_NOTIFICATION_REASON_RECORD_DELETED - A record matching the
         * subscription’s predicate was updated.
         *
         * QUERY_NOTIFICATION_REASON_RECORD_UPDATED - A record matching the
         * subscription’s predicate was deleted.
         */
        readonly queryNotificationReason?: ( 'QUERY_NOTIFICATION_REASON_RECORD_CREATED' | 'QUERY_NOTIFICATION_REASON_RECORD_DELETED' | 'QUERY_NOTIFICATION_REASON_RECORD_UPDATED' );

        /**
         * A dictionary representation of the fields that changed in the
         * record. The keys are the record field names, and the values are the
         * record field values.
         */
        readonly recordFields: Array<RecordField>;

        /**
         * The name of the record that was created, deleted, or updated.
         */
        readonly recordName: string;

        /**
         * Returns a string representation of the notification.
         *
         * @return {string}
         * A string representation of this object.
         */
        toString (): string;
    }

    /**
     * A QueryResponse object encapsulates the results of using a query to
     * fetch records
     */
    export class QueryResponse extends RecordsResponse
    {
        /**
         * Marks the location of the last batch of results.
         */
        readonly continuationMarker: string;

        /**
         * An array of strings containing record field names that limits the
         * amount of data returned in this operation.
         */
        readonly desiredKeys: Array<string>;

        /**
         * A Boolean value indicating whether this object is an instance of the
         * CloudKit.QueryResponse class.
         */
        readonly isQueryResponse: boolean;

        /**
         * A Boolean value that indicates whether there are more records to
         * fetch.
         */
        readonly moreComing: boolean;

        /**
         * A Query dictionary containing the criteria for matching records in
         * the database.
         */
        readonly query: Query;

        /**
         * The maximum number of records to fetch.
         */
        readonly resultsLimit: number;

        /**
         * A ZoneID dictionary that identifies a record zone in the database.
         */
        readonly zoneID: ZoneID;

        /**
         * A Boolean value that determines whether all zones should be
         * searched. If true, all zones are searched. If false, only the
         * default zone is searched.
         */
        readonly zoneWide: boolean;

        /**
         * Returns a string representation of this QueryResponse object.
         *
         * @return {string}
         * A string representation of this object.
         */
        toString (): string;
    }

    /**
     * A RecordInfosResponse object encapsulates the results of fetching
     * information about records in general and shared records in particular.
     */
    export class RecordInfosResponse extends Response
    {
        /**
         * A Boolean value indicating whether this object is an instance of the
         * RecordInfosResponse class.
         */
        readonly isRecordInfosResponse: boolean;

        /**
         * The results of fetching record information.
         */
        readonly results: Array<RecordInfo>;

        /**
         * Returns a string representation of this object.
         *
         * @return {string}
         * A string representation of this RecordInfosResponse object.
         */
        toString (): string;
    }

    /**
     * A RecordsBatchBuilder object encapsulates the results of changes to
     * multiple records in a single database operation.
     */
    export class RecordsBatchBuilder
    {
        /**
         * Creates one or more records.
         *
         * @param {(Array<RecordToCreate>|Array<RecordLike>)} records
         * An array of dictionaries representing the records to create.
         *
         * @param {RecordsBatchOptions} options
         * A dictionary containing options for this operation.
         *
         * @return {RecordsBatchBuilder}
         * The object that received this method call.
         */
        create ( records: ( Array<RecordToCreate> | Array<RecordLike> ), options?: RecordsBatchOptions ): RecordsBatchBuilder;

        /**
         * Creates or updates one or more records depending on the information
         * provided.
         *
         * @param {(Array<RecordToCreate>|Array<RecordToSave>|Array<RecordLike>)} records
         * An array of dictionaries representing the records to create or
         * update.
         *
         * @param {RecordsBatchOptions} options
         * A dictionary containing options for this operation.
         *
         * @return {RecordsBatchBuilder}
         * The object that received this method call.
         */
        createOrUpdate ( records: ( Array<RecordToCreate> | Array<RecordToSave> | Array<RecordLike> ), options?: RecordsBatchOptions ): RecordsBatchBuilder;

        /**
         * Executes the operations on the database that created this batch
         * builder object.
         *
         * @return {Promise<RecordsResponse,CKError>}
         * A Promise object that resolves to a RecordsResponse object if the
         * operation succeeds; otherwise, a CKError object.
         */
        commit (): Promise<RecordsResponse, CKError>;

        /**
         * Deletes one or more records.
         *
         * @param {Array<RecordToDelete>} records
         * An array of dictionaries representing the records to delete.
         *
         * @return {RecordsBatchBuilder}
         * The object that received this method call.
         */
        delete ( records: Array<RecordToDelete> ): RecordsBatchBuilder;

        /**
         * Deletes one or more records regardless of conflicts.
         *
         * @param {Array<RecordToForceDelete>} records
         * An array of dictionaries representing the records to delete.
         *
         * @return {RecordsBatchBuilder}
         * The object that received this method call.
         */
        forceDelete ( records: Array<RecordToForceDelete> ): RecordsBatchBuilder;

        /**
         * Replaces one or more records with the specified records regardless
         * of conflicts. Only the values of the fields in the given records are
         * replaced. The other field values are set to null.
         *
         * @param {Array<RecordToForceSave>} records
         * An array of dictionaries representing the replacement records.
         *
         * @param {RecordsBatchOptions} options
         * A dictionary containing options for this operation.
         *
         * @return {RecordsBatchBuilder}
         * The object that received this method call.
         */
        forceReplace ( records: Array<RecordToForceSave>, options?: RecordsBatchOptions ): RecordsBatchBuilder;

        /**
         * Updates one or more existing records regardless of conflicts.  Only
         * the values of the fields in the given records are updated.
         *
         * @param {Array<RecordToForceSave>} records
         * An array of dictionaries representing the fields of the records you
         * want to update.
         *
         * @param {RecordsBatchOptions} options
         * A dictionary containing options for this operation.
         *
         * @return {RecordsBatchBuilder}
         * The object that received this method call.
         */
        forceUpdate ( records: Array<RecordToForceSave>, options?: RecordsBatchOptions ): RecordsBatchBuilder;

        /**
         * Replaces one or more records with the specified records.
         *
         * @param {Array<RecordToSave>} records
         * An array of dictionaries representing the replacement records.
         *
         * @param {RecordsBatchOptions} options
         * A dictionary containing options for this operation.
         *
         * @return {RecordsBatchBuilder}
         * The object that received this method call.
         */
        replace ( records: Array<RecordToSave>, options?: RecordsBatchOptions ): RecordsBatchBuilder;

        /**
         * Updates one or more existing records.
         *
         * @param {Array<RecordToSave>} records
         * An array of dictionaries representing the fields of the records you
         * want to update.
         *
         * @param {RecordsBatchOptions} options
         * A dictionary containing options for this operation.
         *
         * @return {RecordsBatchBuilder}
         * The object that received this method call.
         */
        update ( records: Array<RecordToSave>, options?: RecordsBatchOptions ): RecordsBatchBuilder;
    }

    /**
     * A RecordsResponse object encapsulates the results of fetching records.
     */
    export class RecordsResponse extends Response
    {
        /**
         * A Boolean value indicating whether this object is an instance of the
         * RecordsResponse class.
         */
        readonly isRecordsResponse: boolean;

        /**
         * A Boolean value indicating whether the numbers in fields are
         * represented as strings.
         */
        readonly numbersAsStrings: boolean;

        /**
         * The records for the successful operations.
         */
        readonly records: ( Array<RecordReceived> | Array<ShareRecordReceived> );

        /**
         * Returns a string representation of this RecordsResponse object.
         *
         * @return {string}
         * A string representation of this object.
         */
        toString (): string;
    }

    /**
     * The RecordZoneChangesResponse object encapsulates the results of
     * fetching changes to one or more record zones.
     */
    export class RecordZoneChangesResponse extends Response
    {
        /**
         * A Boolean value indicating whether this object is an instance of the
         * RecordZoneChangesResponse class.
         */
        readonly isRecordZoneChangesResponse: boolean;

        /**
         * The records that changed in each zone.
         */
        readonly zones: Array<RecordZoneChanges>;
    }

    /**
     * A RecordZoneNotification object represents a push notification that was
     * caused by changes to the contents of a record zone. A zone notification
     * is triggered by subscriptions where the subscriptionType key is zone.
     * Use a RecordZoneNotification object to get information about the record
     * that changed. To create zone subscriptions and handle push
     * notifications, see the saveSubscriptions method in Database.
     */
    export class RecordZoneNotification extends Notification
    {
        /**
         * A Boolean value indicating whether this notification is a
         * RecordZoneNotification object.
         */
        readonly isRecordZoneNotification: boolean;

        /**
         * Returns a string representation of the notification.
         * @return {string} A string representation of the notification.
         */
        toString (): string;
    }

    /**
     * A RecordZonesResponse object encapsulates the results of database
     * operations on a record zone.
     */
    export class RecordZonesResponse extends Response
    {
        /**
         * Boolean value indicating whether this object is an instance of the
         * RecordZonesResponse class.
         */
        readonly isRecordZonesResponse: boolean;

        /**
         * Contains the zones for the successful database operations.
         */
        readonly zones: Array<RecordZone>;

        /**
         * Returns a string representation of this RecordZonesResponse object.
         *
         * @return {string}
         * A string representation of this object.
         */
        toString (): string;
    }

    /**
     * The Response class is an abstract superclass for subclasses that
     * encapsulate the response from server requests. Don’t create instances of
     * this class. Instances of subclasses are returned by methods in the
     * Container and Database classes. Most of these methods return a Promise
     * object, that resolves to a subclass of Response if the operation is
     * successful.
     */
    export abstract class Response
    {
        /**
         * Errors that occurred in the request.
         */
        readonly errors: Array<CKError>;

        /**
         * A Boolean value indicating whether errors occurred in the request.
         */
        readonly hasErrors: boolean;

        /**
         * A Boolean value that indicates whether there is a response from the
         * request.
         */
        readonly isResponse: boolean;
    }

    /**
     * A SubscriptionsResponse object encapsulates the results of database
     * operations on subscriptions.
     */
    export class SubscriptionsResponse extends Response
    {
        /**
         * Boolean value indicating whether this object is an instance of the
         * SubscriptionsResponse class.
         */
        readonly isSubscriptionsResponse: boolean;

        /**
         * Contains the subscriptions for the successful operations.
         */
        readonly subscriptions: Array<Subscription>;

        /**
         * Returns a string representation of this object.
         * @return {string} A string representation of this object.
         */
        toString (): string;
    }

    /**
     * A UserIdentitiesResponse object encapsulates the results of fetching
     * user identities.
     */
    export class UserIdentitiesResponse extends Response
    {
        /**
         * A Boolean value indicating whether this object is an instance of the
         * UserIdentitiesResponse class.
         */
        readonly isUserIdentitiesResponse: boolean;

        /**
         * The fetched user identities.
         */
        readonly users: Array<UserIdentity>;

        /**
         * Returns a string representation of this object.
         *
         * @return {string}
         * A string representation of this object.
         */
        toString (): string;
    }

    /////
    //
    //  Constants
    //
    /////

    /**
     * The CloudKit JS build number.
     */
    export const BUILD_VERSION: string;

    /**
     * An event that is fired when CloudKit JS is loaded. Used when cloudkit.js
     * is loaded asynchronously.
     */
    export const CLOUDKIT_LOADED: string;

    /**
     * The container environment is not accessible by apps available on the
     * store.
     */
    export const DEVELOPMENT_ENVIRONMENT: 'development';

    /**
     * The container environment is accessible by both development apps and
     * apps available on the store.
     */
    export const PRODUCTION_ENVIRONMENT: 'production';

    /**
     * The version of CloudKit JS.
     */
    export const VERSION: string;

    /**
     * The version number of the WebSocket API.
     */
    export const WS_API_VERSION: number;

    /////
    //
    //  Enums
    //
    /////

    /**
     * NOT AVAILABLE
     * Specifies the look of the Apple ID button.
     */
    export enum AppleIDButtonTheme
    {
        /**
         * Black button.
         */
        BLACK,

        /**
         * White button.
         */
        WHITE,

        /**
         * White button with an outline.
         */
        WHITE_WITH_OUTLINE
    }

    /**
     * Available database scopes.
     */
    export enum DatabaseScope
    {
        /**
         * The private database.
         */
        PRIVATE,

        /**
         * The public database.
         */
        PUBLIC,

        /**
         * The shared database.
         */
        SHARED
    }

    /**
     * The comparators you use to create queries.
     */
    export enum QueryFilterComparator
    {
        /**
         * Finds records with a string field that begins with a substring.
         */
        BEGINS_WITH,

        /**
         * Finds records with text fields containing all tokens.
         */
        CONTAINS_ALL_TOKENS,

        /**
         * Finds records with text fields containing any token.
         */
        CONTAINS_ANY_TOKENS,

        /**
         * The value on the left is equal to the value on the right.
         */
        EQUALS,

        /**
         * The value on the left is greater than the value on the right.
         */
        GREATER_THAN,

        /**
         * The value on the left is greater than or equal to the value on the
         * right.
         */
        GREATER_THAN_OR_EQUALS,

        /**
         * The value on the left is in the list on the right.
         */
        IN,

        /**
         * The value on the left is less than the value on the right.
         */
        LESS_THAN,

        /**
         * The value on the left is less than or equal to the value on the
         * right.
         */
        LESS_THAN_OR_EQUALS,

        /**
         * Finds records containing values in its list field.
         */
        LIST_CONTAINS,

        /**
         * Finds records containing all values in its list field.
         */
        LIST_CONTAINS_ALL,

        /**
         * Finds records that contain any of the values in its list field.
         */
        LIST_CONTAINS_ANY,

        /**
         * Finds records containing a value as the first item in its list
         * field.
         */
        LIST_MEMBER_BEGINS_WITH,

        /**
         * The location on the left is within the specified distance of the
         * location on the right.
         */
        NEAR,

        /**
         * Finds records with a string field that doesn’t begin with a
         * substring.
         */
        NOT_BEGINS_WITH,

        /**
         * The value on the left is not equal to the value on the right.
         */
        NOT_EQUALS,

        /**
         * The value on the left is not in the list on the right.
         */
        NOT_IN,

        /**
         * Finds records not containing values not in its list field.
         */
        NOT_LIST_CONTAINS,

        /**
         * Finds records not containing all values in its list field.
         */
        NOT_LIST_CONTAINS_ALL,

        /**
         * Finds records not containing any of the values in its list field.
         */
        NOT_LIST_CONTAINS_ANY,

        /**
         * Finds records not containing a value as the first item in its list
         * field.
         */
        NOT_LIST_MEMBER_BEGINS_WITH
    }

    /**
     * The delete action for a reference object.
     */
    export enum ReferenceAction
    {
        /**
         * No action when a referenced record is deleted. The deletion of the
         * additional records may trigger a cascade deletion of more records.
         * The deletions are asynchronous in the default zone and immediate in
         * a custom zone.
         */
        DELETE_SELF,

        /**
         * Deletes a source record when the target record is deleted. Deleting
         * a parent record does not delete the children that refer to that
         * parent.
         */
        NONE,

        /**
         * Deletes a target record only after all source records are deleted.
         * Verifies that the target record exists before creating this type of
         * reference. If it doesn’t exist, creating the reference fails.
         */
        VALIDATE
    }

    /**
     * The status of a participant accepting a share invitation.
     */
    export enum ShareParticipantAcceptanceStatus
    {
        /**
         * The participant accepted the invitation.
         */
        ACCEPTED,

        /**
         * The participant was invited but hasn’t accepted.
         */
        PENDING,

        /**
         * The status is unknown.
         */
        UNKNOWN
    }

    /**
     * The status of a participant accepting a share invitation.
     */
    export enum ShareParticipantPermission
    {
        /**
         * No permissions.
         */
        NONE,

        /**
         * Read-only permissions.
         */
        READ_ONLY,

        /**
         * Read-write permissions.
         */
        READ_WRITE,

        /**
         * Unknown permissions.
         */
        UNKNOWN
    }

    /**
     * Determines whether a participant can modify the list of participants of
     * a shared record.
     */
    export enum ShareParticipantType
    {
        /**
         * The owner of the shared record who can add private users but not add
         * public users.
         */
        OWNER,

        /**
         * Participants who were invited to share the record by the owner.
         */
        PRIVATE_USER,

        /**
         * Participants who accepted a shared record by accessing the share
         * URL.
         */
        PUBLIC_USER,

        /**
         * Unknown type of participant.
         */
        UNKNOWN
    }

    /**
     * Display information about the record type of a shared record.
     */
    export enum ShareRecordType
    {
        /**
         * The name of the share record type cloudkit.share.
         */
        NAME,

        /**
         * The name of the thumbnail image data field.
         */
        THUMBNAIL_IMAGE_DATA_FIELD_NAME,

        /**
         * The name of the title field.
         */
        TITLE_FIELD_NAME,

        /**
         * The name of the type field.
         */
        TYPE_FIELD_NAME
    }

    /**
     * The type of subscription.
     */
    export enum SubscriptionType
    {
        /**
         * A database subscription.
         */
        DATABASE,

        /**
         * A query subscription.
         */
        QUERY,

        /**
         * A record zone subscription.
         */
        RECORD_ZONE
    }

    /////
    //
    //  Functions
    //
    /////

    /**
     * Configures CloudKit JS.
     *
     * @param {CloudKitConfig} config
     * The properties to use to initialize CloudKit JS.
     *
     * @return {CloudKit}
     * The configured CloudKit object.
     */
    export function configure ( config: CloudKitConfig ): CloudKit;

    /////
    //
    //  Interfaces
    //
    /////

    /**
     * An asset dictionary represents an Asset field type.
     */
    export interface Asset
    {
        /**
         * The location of the asset data to download. This key is present only
         * when fetching the enclosing record.
         */
        downloadURL: string;

        /**
         * The signature of a file returned from the file upload step. This key
         * is required for the public and private database.
         */
        fileChecksum: string;

        /**
         * The receipt for uploading the asset, described in Upload Asset Data.
         * This key is required for the public and private database when saving
         * the enclosing record.
         */
        receipt: string;

        /**
         * The checksum of the wrapping key returned from the upload step. This
         * key is required for the private database.
         */
        referenceChecksum: string;

        /**
         * The size of the file, calculated by the asset upload step. This key
         * is required for the public and private database.
         */
        size: number;

        /**
         * The secret key used to encrypt the asset. This key is required for
         * the private database.
         */
        wrappingKey: string;
    }

    /**
     * A configuration for a container.
     */
    export interface ClientContainerConfig extends ContainerConfigLike
    {
        /**
         * The API token and other authentication properties.
         */
        apiTokenAuth: ContainerConfigApiTokenAuthObject;
    }

    /**
     * Dictionary used to configure the CloudKit environment.
     */
    export interface CloudKitConfig
    {
        /**
         * For each container that you access, specify the container ID, API
         * token, and environment.
         */
        containers: ( Array<ContainerConfigLike> | Array<ClientContainerConfig> | Array<ServerContainerConfig> );

        /**
         * Encapsulates information about services.
         */
        services?: CloudKitConfigServicesObject;
    }

    /**
     * Encapsulates information about services.
     */
    export interface CloudKitConfigServicesObject
    {
        /**
         * An object with the two methods: putToken and getToken.
         */
        authTokenStore?: {
            putToken?: ( containerIdentifier: string, authToken: string ) => void;
            getToken?: ( containerIdentifier: string ) => string;
        };

        /**
         * A function compatible with `window.fetch`.
         */
        fetch?: Function;

        /**
         * An object with methods `info`, `log`, `warn`, and `error`. You
         * can set this object to `window.console`.
         */
        logger?: CloudKitConfigServicesLoggerObject;

        /**
         * An object used for deferred and asynchronous computations.
         */
        Promise?: Function;
    }

    /**
     * An object with methods `info`, `log`, `warn`, and `error`, as it is
     * implemented by the `window.console`.
     */
    export interface CloudKitConfigServicesLoggerObject
    {
        error?: Function;
        info?: Function;
        log?: Function;
        warn?: Function;
    }

    /**
     * The API token and other authentication properties.
     */
    export interface ContainerConfigApiTokenAuthObject
    {
        /**
         * The API token generated and obtained using CloudKit Dashboard
         * at the Apple Developer Site.
         */
        apiToken: string;

        /**
         * To keep the user signed in after closing and reopening the
         * browser, set persist to true. The default value is false.
         */
        persist?: boolean;

        /**
         * The sign-in button to display to the user. If null, uses the
         * default property values.
         */
        signInButton?: {
            /**
             * The DOM element ID. The default value is
             * "apple-sign-in-button".
             */
            id?: string;

            /**
             * The button theme. The default value is medium.
             */
            theme?: string;
        };

        /**
         * The sign-out button to display to the user. If null, uses the
         * default property values.
         */
        signOutButton?: {
            /**
             * The DOM element ID. The default value is
             * "apple-sign-out-button".
             */
            id?: string;

            /**
             * The button theme. The default value is medium.
             */
            theme?: string;
        };
    }

    /**
     * A configuration for a container. Please use ContainerConfigLike,
     * ClientContainerConfig, and ServerContainerConfig instead of
     * ContainerConfig.
     *
     * @deprecated
     * This interface is deprecated.
     */
    export interface ContainerConfig extends ContainerConfigLike
    {
        /**
         * The API token and other authentication properties.
         *
         * Either this key or the `serverToServerKeyAuth` key is required. If
         * you include this key, don’t include the `serverToServerKeyAuth` key.
         */
        apiTokenAuth?: ContainerConfigApiTokenAuthObject;

        /**
         * The Apple Push Notification service (APNs) environment associated
         * with this container.
         *
         * Possible values are `development` and `production`. See also
         * {@link DEVELOPMENT_ENVIRONMENT} and {@link PRODUCTION_ENVIRONMENT}.
         */
        apnsEnvironment?: ( 'development' | 'production' );

        /**
         * The string that identifies the app’s container. This key is
         * required.
         */
        containerIdentifier: string;

        /**
         * The version of the app’s container.
         *
         * Possible values are `development` and `production`. See also
         * {@link DEVELOPMENT_ENVIRONMENT} and {@link PRODUCTION_ENVIRONMENT}.
         */
        environment: ( 'development' | 'production' );

        /**
         * The server-to-server authentication key and related properties.
         *
         * Either this key or the `apiTokenAuth` key is required. If you include
         * this key, don’t include the `apiTokenAuth` key.
         */
        serverToServerKeyAuth?: ContainerConfigServerKeyAuthObject;
    }

    /**
     * A configuration for a container.
     */
    export interface ContainerConfigLike
    {
        /**
         * The API token and other authentication properties.
         *
         * Either this key or the `serverToServerKeyAuth` key is required. If
         * you include this key, don’t include the `serverToServerKeyAuth` key.
         */
        apiTokenAuth?: ContainerConfigApiTokenAuthObject;

        /**
         * The Apple Push Notification service (APNs) environment associated
         * with this container.
         *
         * Possible values are `development` and `production`. See also
         * {@link DEVELOPMENT_ENVIRONMENT} and {@link PRODUCTION_ENVIRONMENT}.
         */
        apnsEnvironment?: ( 'development' | 'production' );

        /**
         * The string that identifies the app’s container. This key is
         * required.
         */
        containerIdentifier: string;

        /**
         * The version of the app’s container.
         *
         * Possible values are `development` and `production`. See also
         * {@link DEVELOPMENT_ENVIRONMENT} and {@link PRODUCTION_ENVIRONMENT}.
         */
        environment: ( 'development' | 'production' );

        /**
         * The server-to-server authentication key and related properties.
         *
         * Either this key or the `apiTokenAuth` key is required. If you include
         * this key, don’t include the `apiTokenAuth` key.
         */
        serverToServerKeyAuth?: ContainerConfigServerKeyAuthObject;
    }

    /**
     * The server-to-server authentication key and related properties.
     */
    export interface ContainerConfigServerKeyAuthObject
    {
        /**
         * A unique identifier for the key generated using CloudKit
         * Dashboard at the Apple Developer Site.
         */
        keyID: string;

        /**
         * The path to the PEM encoded key file.
         */
        privateKeyFile: string;

        /**
         * The pass phrase for the key.
         */
        privateKeyPassPhrase: string;
    }

    /**
     * Options to fetch database changes.
     */
    export interface DatabaseFetchOptions
    {
        /**
         * Identifies a point in the database’s change history. The first time
         * you fetch changes, omit this key and if moreComing is true in the
         * response, use the syncToken in the response in the next request
         * until moreComing is false.
         */
        syncToken?: string;
    }

    /**
     * A filter dictionary defines the logical conditions for determining
     * whether a record matches the query. Please use FilterLike,
     * RecordFieldFilter, and SystemFieldFilter instead of Filter.
     *
     * @deprecated
     * This interface is deprecated.
     */
    export interface Filter extends FilterLike
    {
        /**
         * A string representing the filter comparison operator. This key is
         * required.
         */
        comparator: QueryFilterComparator;

        /**
         * A radius in meters used to determine whether a field of type
         * Location is inside a circular area. The center of the circle is
         * fieldValue and the radius is distance. The key is used only if
         * fieldName is a Location type.
         */
        distance?: number;

        /**
         * The name of a field belonging to the record type.
         */
        fieldName?: string;

        /**
         * A field-value dictionary representing the value of the field that
         * you want all fetched records to match. This key is required.
         */
        fieldValue: RecordField;
    }

    /**
     * A filter dictionary defines the logical conditions for determining
     * whether a record matches the query.
     */
    export interface FilterLike
    {
        /**
         * A string representing the filter comparison operator. This key is
         * required.
         */
        comparator: QueryFilterComparator;

        /**
         * A radius in meters used to determine whether a field of type
         * Location is inside a circular area. The center of the circle is
         * fieldValue and the radius is distance. The key is used only if
         * fieldName is a Location type.
         */
        distance?: number;

        /**
         * The name of a field belonging to the record type. If you include
         * this key, don’t include the systemFieldName key.
         */
        fieldName?: string;

        /**
         * A field-value dictionary representing the value of the field that
         * you want all fetched records to match. This key is required.
         */
        fieldValue: RecordField;

        /**
         * The name of a system field instead of a record type specific field.
         * If you include this key, don’t include the systemField key.
         */
        systemFieldName?: string;
    }

    /**
     * A location dictionary represents values used to set a field of type
     * Location.
     */
    export interface Location
    {
        /**
         * The altitude measured in meters.
         */
        altitude?: number;

        /**
         * The direction in which the device is traveling.
         */
        course?: string;

        /**
         * The radius of uncertainty for the location, measured in meters.
         */
        horizontalAccuracy?: number;

        /**
         * The latitude of the coordinate point.
         */
        latitude: number;

        /**
         * The longitude of the coordinate point.
         */
        longitude: number;

        /**
         * The instantaneous speed of the device in meters per second.
         */
        speed?: number;

        /**
         * The time at which this location was determined.
         */
        timestamp?: number;

        /**
         * The accuracy of the altitude value in meters.
         */
        verticalAccuracy?: number;
    }

    /**
     * The parts of the user’s name.
     */
    export interface NameComponents
    {
        /**
         * The user’s last name.
         */
        familyName: string;

        /**
         * The user’s first name.
         */
        givenName: string

        /**
         * The user’s middle name.
         */
        middleName?: string;

        /**
         * The user’s prefix.
         */
        namePrefix?: string;

        /**
         * The user’s suffix.
         */
        nameSuffix?: string;

        /**
         * The user’s nickname.
         */
        nickName?: string;

        /**
         * A phonetic representation of the user’s name.
         */
        phoneticRepresentation: string;
    }

    /**
     * Information about a notification.
     */
    export interface NotificationInfo
    {
        /**
         * Fields the server sends along with this notification.
         */
        additionalFields?: Array<string>;

        /**
         * A key to get a localized right button title that appears in the
         * alert dialog.
         */
        alertActionLocalizationKey?: string;

        /**
         * The text of the alert message.
         */
        alertBody?: string;

        /**
         * The filename of an image file in the app bundle used as a launch
         * image.
         */
        alertLaunchImage?: string;

        /**
         * Array of strings to appear as variables if alertLocalizationKey is a
         * format specifier.
         */
        alertLocalizationArgs?: Array<string>;

        /**
         * A key to a localized alert-message.
         */
        alertLocalizationKey?: string;

        /**
         * The name of the action group corresponding to this notification.
         */
        category?: string;

        /**
         * A Boolean value indicating whether a badge should be displayed. If
         * true, a badge is displayed; otherwise, it is not. The default value
         * is false.
         */
        shouldBadge?: boolean;

        /**
         * A Boolean value indicating whether new content is available. If
         * true, new content is available; otherwise, it is not. The default
         * value is false.
         */
        shouldSendContentAvailable?: boolean;

        /**
         * The name of a sound file in the app bundle to play as an alert.
         */
        soundName?: string;
    }

    /**
     * Represents an operation that hasn't completed yet, but is expected in
     * the future. The asynchronous methods in CloudKit JS return a Promise
     * object that resolves when the operation completes or is rejected due to
     * an error. For a description of the Promise class returned by these
     * methods, go to Mozilla Developer Network: Promise.
     */
    export interface Promise<TResult, TError>
    {
        /**
         * Appends fulfillment and rejection handlers to the promise, and
         * returns a new promise resolving to the return value of the called
         * handler, or to its original settled value if the promise was not
         * handled (i.e. if the relevant handler onFulfilled or onRejected is
         * not a function).
         *
         * @param {Function} onFulfilled
         * A Function called when the Promise is fulfilled. This function has
         * one argument, the fulfillment value.
         *
         * @param {Function} onRejected
         * A Function called when the Promise is rejected. This function has
         * one argument, the rejection reason.
         *
         * @return {Promise<TResult,TError>}
         * A Promise.
         */
        then ( onFulfilled: ( result: TResult ) => any, onRejected?: ( reason?: TError ) => any ): Promise<TResult, TError>;

        /**
         * Appends a rejection handler callback to the promise, and returns a
         * new promise resolving to the return value of the callback if it is
         * called, or to its original fulfillment value if the promise is
         * instead fulfilled.
         *
         * @param {Function} onRejected
         * A Function called when the Promise is rejected. This function has
         * one argument, the rejection reason.
         *
         * @return {Promise<TResult,TError>}
         * Current or new Promise.
         */
        catch ( onRejected: ( reason?: TError ) => any ): Promise<TResult, TError>;
    }

    /**
     * Search parameters to use when fetching records from the database.
     */
    export interface Query
    {
        /**
         * An array of predicate dictionaries used to determine whether a
         * record matches the query.
         */
        filterBy?: ( Array<FilterLike> | Array<RecordFieldFilter> | Array<SystemFieldFilter> );

        /**
         * The name of the record type. This key is required.
         */
        recordType: string;

        /**
         * An array of sort descriptor dictionaries that specify how to order
         * the fetched records.
         */
        sortBy?: ( Array<SortDescriptorLike> | Array<RecordFieldSortDescriptor> | Array<SystemFieldSortDescriptor> );
    }

    /**
     * A record in the database. Please use RecordLike, RecordReceived,
     * RecordToCreate, and RecordToSave instead of Record.
     *
     * @deprecated
     * This interface is deprecated.
     */
    export interface Record extends RecordLike
    {
        /**
         * Information about when the record was created on the server. The
         * value of this field is set by the server. Omit this key when saving
         * a record.
         */
        created?: {
            /**
             * The time at which the record was created.
             */
            timestamp: number;

            /**
             * The ID of the user who created the record.
             */
            user: string;
        };

        /**
         * A Boolean value indicating whether to create a short GUID.
         */
        createShortGUID?: boolean;

        /**
         * A Boolean value indicating whether the record was deleted; true if
         * the record was deleted; otherwise, false.
         */
        deleted?: boolean;

        /**
         * Names of the fields or field-value pairs.
         */
        fields?: ( Array<string> | { [name: string]: RecordField } );

        /**
         * Information about when the record was last modified. This value of
         * this field is set by the server. Omit this key when saving a record.
         */
        modified?: {
            /**
             * The time at which the record was modified.
             */
            timestamp: number;

            /**
             * The ID of the user who modified the record.
             */
            user: string;
        }

        /**
         * A reference to a parent object used for sharing.
         */
        parent?: Reference;

        /**
         * A string containing the server change token for the record. Use this
         * tag to indicate which version of the record you last fetched. This
         * key is required if you are saving an existing record.
         */
        recordChangeTag?: string;

        /**
         * The unique name used to identify the record. The default value is a
         * random UUID.
         */
        recordName?: string;

        /**
         * The name of the record type. This key is required if the record
         * doesn’t exist.
         */
        recordType: string;

        /**
         * A reference to the shared object for this record.
         */
        share?: Reference;

        /**
         * A global unique identifier for this record used for sharing.
         */
        shortGUID?: string;
    }

    /**
     * A dictionary containing options to use when deleting records.
     */
    export interface RecordDeleteOptions
    {
        /**
         * A ZoneID or zone name that identifies the record zone in the
         * database where you want to perform the operation. The default is the
         * database default zone.
         */
        zoneID?: ( ZoneID | string );
    }

    /**
     * A dictionary containing options to use when fetching records.
     */
    export interface RecordFetchOptions
    {
        /**
         * Marks the location of the last batch of results. Use this key when
         * the results of a previous fetch exceed the maximum. The default
         * value is null.
         */
        continuationMarker?: ( string | null );

        /**
         * An array of strings containing record field names that limits the
         * amount of data returned in this operation. Only the fields specified
         * in the array are returned. The default is null, which fetches all
         * record fields.
         */
        desiredKeys?: ( Array<string> | null );

        /**
         * A Boolean value indicating whether number fields should be
         * represented by strings. The default value is false.
         */
        numbersAsStrings?: boolean;

        /**
         * The maximum number of records to fetch. The default is the maximum
         * number of records in a response that is allowed.
         */
        resultsLimit?: number;

        /**
         * A ZoneID or zone name that identifies the record zone in the
         * database where you want to perform the operation. The default is the
         * database default zone.
         */
        zoneID?: ( ZoneID | string );

        /**
         * Boolean value determining wether all zones should be searched. This
         * key is ignored if zoneID is non-null. To search all zones, set to
         * true. To search the default zone only, set to false.
         */
        zoneWide?: boolean;
    }

    /**
     * A record field dictionary represents the value of a field.
     */
    export interface RecordField
    {
        /**
         * The type of the field. This key is optional when saving a record.
         */
        type?: ( 'ASSETID' | 'BOOLEAN' | 'BYTES' | 'DOUBLE' | 'INT64' | 'LOCATION' | 'REFERENCE' | 'STRING' | 'TIMESTAMP' | 'ASSETID_LIST' | 'BOOLEAN_LIST' | 'BYTES_LIST' | 'DOUBLE_LIST' | 'INT64_LIST' | 'LOCATION_LIST' | 'REFERENCE_LIST' | 'STRING_LIST' | 'TIMESTAMP_LIST' );

        /**
         * The value of the field. All custom record fields are nullable.
         *
         * Possible type values are:
         * - "ASSETID": Blob or CloudKit.Asset
         * - "ASSETID_LIST": Array<( Blob | CloudKit.Asset )>
         * - "BOOLEAN": boolean
         * - "BOOLEAN_LIST": Array<boolean>
         * - "BYTES": string (base64)
         * - "BYTES_LIST": Array<string> (base64)
         * - "DOUBLE": number
         * - "DOUBLE_LIST": Array<number>
         * - "INT64": number
         * - "INT64_LIST": Array<number>
         * - "LOCATION": CloudKit.Location
         * - "LOCATION_LIST": Array<CloudKit.Location>
         * - "REFERENCE": CloudKit.Reference
         * - "REFERENCE_LIST": Array<CloudKit.Reference>
         * - "STRING": string
         * - "STRING_LIST": Array<string>
         * - "TIMESTAMP": number
         * - "TIMESTAMP_LIST": Array<number>
         */
        value: ( Asset | Blob | boolean | Location | number | Reference | string | Array<( Asset | Blob )> | Array<boolean> | Array<Location> | Array<number> | Array<Reference> | Array<string> | null );
    }


    /**
     * A filter dictionary defines the logical conditions for determining
     * whether a record matches the query.
     */
    export interface RecordFieldFilter extends FilterLike
    {
        /**
         * The name of a field belonging to the record type.
         * This key is required.
         */
        fieldName: string;
    }

    /**
     * A sort descriptor dictionary determines the order of the fetched
     * records.
     */
    export interface RecordFieldSortDescriptor extends SortDescriptorLike
    {
        /**
         * The name of a field belonging to the record type. Used to sort the
         * fetched records. This key is required.
         */
        fieldName: string;
    }

    /**
     * Encapsulates the results of fetching information about a record.
     */
    export interface RecordInfo
    {
        /**
         * The shared record.
         */
        share: ShareRecordReceived;

        /**
         * The root shared record.
         */
        rootRecord: RecordReceived;
    }

    /**
     * A record in the database.
     */
    export interface RecordLike
    {
        /**
         * Names of the fields or field-value pairs.
         */
        fields?: ( Array<string> | { [name: string]: RecordField } );

        /**
         * A reference to a parent object used for sharing.
         */
        parent?: Reference;

        /**
         * The unique name used to identify the record. The default value is a
         * random UUID.
         */
        recordName?: string;

        /**
         * The name of the record type.
         */
        recordType: string;
    }

    /**
     * A dictionary containing options to use when modifying records.
     */
    export interface RecordModifyOptions
    {
        /**
         * A Boolean value indicating whether the entire operation fails when
         * one or more operations fail. If true, the entire request fails if
         * one operation fails. If false, some operations may succeed and
         * others may fail. The default value is false. This property only
         * applies to custom zones.
         */
        atomic?: boolean;

        /**
         * An array of strings containing record field names that limits the
         * amount of data returned in this operation. Only the fields specified
         * in the array are returned. The default is null, which fetches all
         * record fields.
         */
        desiredKeys?: ( Array<string> | null );

        /**
         * A ZoneID or zone name that identifies the record zone in the
         * database where you want to perform the operation. The default is the
         * database default zone.
         */
        zoneID?: ( ZoneID | string );
    }

    /**
     * A record in the database.
     */
    export interface RecordReceived extends RecordLike
    {
        /**
         * Information about when the record was created on the server.
         */
        created: {
            /**
             * The time at which the record was created.
             */
            timestamp: number;

            /**
             * The ID of the user who created the record.
             */
            user: string;
        };

        /**
         * A Boolean value indicating whether the record was deleted; true if
         * the record was deleted; otherwise, false.
         */
        deleted?: boolean;

        /**
         * Names of the fields or field-value pairs.
         */
        fields: ( Array<string> | { [name: string]: RecordField } );

        /**
         * Information about when the record was last modified.
         */
        modified: {
            /**
             * The time at which the record was modified.
             */
            timestamp: number;

            /**
             * The ID of the user who modified the record.
             */
            user: string;
        }

        /**
         * A string containing the server change token for the record.
         */
        recordChangeTag: string;

        /**
         * The unique name used to identify the record.
         */
        recordName: string;

        /**
         * The name of the record type.
         */
        recordType: string;

        /**
         * A reference to the shared object for this record.
         */
        share?: Reference;

        /**
         * A global unique identifier for this record used for sharing.
         */
        shortGUID?: string;
    }

    /**
     * A dictionary containing options to use when saving records.
     */
    export interface RecordSaveOptions
    {
        /**
         * An array of strings containing record field names that limits the
         * amount of data returned in this operation. Only the fields specified
         * in the array are returned. The default is null which fetches all
         * record fields.
         */
        desiredKeys?: Array<string>;

        /**
         * A Boolean value indicating whether number fields should be
         * represented by strings. The default value is false.
         */
        numbersAsStrings?: boolean;

        /**
         * A ZoneID or zone name that identifies the record zone in the
         * database where you want to perform the operation. The default is the
         * database default zone.
         */
        zoneID?: ( ZoneID | string );
    }

    /**
     * A dictionary containing options for RecordsBatchBuilder operations.
     */
    export interface RecordsBatchOptions
    {
        /**
         * An array of field names.
         */
        desiredKey: Array<string>;
    }

    /**
     * A record in the database.
     */
    export interface RecordToCreate extends RecordLike
    {
        /**
         * A Boolean value indicating whether to create a short GUID.
         */
        createShortGUID?: boolean;

        /**
         * Names of the fields or field-value pairs.
         */
        fields?: ( Array<string> | { [name: string]: RecordField } );

        /**
         * The name of the record type.
         */
        recordType: string;
    }

    /**
     * A record in the database.
     */
    export interface RecordToDelete extends RecordLike
    {
        /**
         * A string containing the server change token for the record. Use this
         * tag to indicate which version of the record you last fetched.
         */
        recordChangeTag: string;

        /**
         * The unique name used to identify the record.
         */
        recordName: string;
    }

    /**
     * A record in the database.
     */
    export interface RecordToForceDelete extends RecordLike
    {
        /**
         * A string containing the server change token for the record. Use this
         * tag to indicate which version of the record you last fetched.
         */
        recordChangeTag?: string;

        /**
         * The unique name used to identify the record.
         */
        recordName: string;
    }

    /**
     * A record in the database.
     */
    export interface RecordToSave extends RecordLike
    {
        /**
         * A Boolean value indicating whether to create a short GUID.
         */
        createShortGUID?: boolean;

        /**
         * Names of the fields or field-value pairs.
         */
        fields: ( Array<string> | { [name: string]: RecordField } );

        /**
         * A string containing the server change token for the record. Use this
         * tag to indicate which version of the record you last fetched.
         */
        recordChangeTag: string;

        /**
         * The unique name used to identify the record.
         */
        recordName: string;
    }

    /**
     * A record in the database.
     */
    export interface RecordToForceSave extends RecordLike
    {
        /**
         * A Boolean value indicating whether to create a short GUID.
         */
        createShortGUID?: boolean;

        /**
         * Names of the fields or field-value pairs.
         */
        fields: ( Array<string> | { [name: string]: RecordField } );

        /**
         * A string containing the server change token for the record. Use this
         * tag to indicate which version of the record you last fetched.
         */
        recordChangeTag?: string;

        /**
         * The unique name used to identify the record.
         */
        recordName: string;

        /**
         * The name of the record type.
         */
        recordType: string;
    }

    /**
     * Represents a record zone.
     */
    export interface RecordZone
    {
        /**
         * A Boolean value indicating whether the entire operation fails when
         * one or more operations fail. If true, the entire request fails if
         * one operation fails. If false, some operations may succeed and
         * others may fail. The default value is false. This property only
         * applies to custom zones.
         */
        atomic?: boolean;

        /**
         * Identifies a point in the zone’s change history. The first time you
         * get record changes, omit this key and if moreComing is true in the
         * response, use the syncToken in the response in the next request
         * until moreComing is false. Otherwise, get the current sync token by
         * fetching a zone.
         */
        syncToken?: string;

        /**
         * The record zone identifier.
         */
        zoneID: ZoneID;
    }

    /**
     * Represents the changes in a record zone.
     */
    export interface RecordZoneChanges
    {
        /**
         * An array of record field names that limit the amount of data
         * returned. Only the fields specified in the array are returned. The
         * default value is null, which fetches all record fields.
         */
        desiredKeys: ( Array<string> | null );

        /**
         * An array of record types that limit the amount of records returned.
         * Only the record types specified in the array are returned.
         */
        desiredRecordTypes: Array<string>;

        /**
         * Errors that may have occurred fetching the changed records.
         */
        errors: Array<CKError>;

        /**
         * Boolean value that indicates whether there are more changes to
         * request. If moreComing is true, request more changes using the value
         * of the included syncToken key. If moreComing is false, there are no
         * more changes.
         */
        moreComing: boolean;

        /**
         * The records that changed.
         */
        records: Array<RecordReceived>;

        /**
         * The maximum number of records to fetch.
         */
        resultsLimit: boolean;

        /**
         * Identifies a point in the zone’s change history. The first time you
         * get record changes, omit this key and if moreComing is true in the
         * response, use the syncToken in the response in the next request
         * until moreComing is false. Otherwise, get the current sync token by
         * fetching a zone.
         */
        syncToken: string;

        /**
         * The record zone identifier.
         */
        zoneID: ZoneID;
    }

    /**
     * Options about fetching changes in a record zone.
     */
    export interface RecordZoneChangesOptions
    {
        /**
         * An array of record field names that limit the amount of data
         * returned. Only the fields specified in the array are returned. The
         * default is null, which fetches all record fields.
         */
        desiredKeys?: Array<string>;

        /**
         * An array of record field types that limit the amount of data
         * returned. Only the fields specified in the array are returned. The
         * default is null, which fetches all record types.
         */
        desiredRecordTypes?: Array<string>;

        /**
         * Identifies a point in the zone’s change history. The first time you
         * get record changes, omit this key and if moreComing is true in the
         * response, use the syncToken in the response in the next request
         * until moreComing is false. Otherwise, get the current sync token by
         * fetching a zone.
         */
        syncToken?: string;

        /**
         * The record zone identifier.
         */
        zoneID: ZoneID;
    }

    /**
     * A reference dictionary represents a Reference field type.
     */
    export interface Reference
    {
        /**
         * The delete action for the reference object. This key is required
         * unless the dictionary is included in a query.
         */
        action?: ReferenceAction;

        /**
         * The unique name used to identify the record within a zone. This key
         * is required.
         */
        recordName: string;

        /**
         * The dictionary that identifies a record zone in the database.
         */
        zoneID?: ZoneID;
    }

    /**
     * A configuration for a container.
     */
    export interface ServerContainerConfig extends ContainerConfigLike
    {
        /**
         * The server-to-server authentication key and related properties.
         */
        serverToServerKeyAuth: ContainerConfigServerKeyAuthObject;
    }

    /**
     * Represents a shared record.
     */
    export interface ShareRecordReceived extends RecordReceived
    {
        /**
         * Participant information of the current user.
         */
        currentUserParticipant: ShareParticipant;

        /**
         * Users who accepted this shared record.
         */
        participants: Array<ShareParticipant>;

        /**
         * The public’s read and write permissions.
         */
        publicPermission: ShareParticipantPermission;
    }

    /**
     * Represents a user who accepted a shared record.
     */
    export interface ShareParticipant
    {
        /**
         * Indicates the status of accepting the shared record.
         */
        acceptanceStatus: ShareParticipantAcceptanceStatus;

        /**
         * The participant’s read and write permissions.
         */
        permission: ShareParticipantPermission;

        /**
         * Type of participant.
         */
        type: ShareParticipantType;

        /**
         * The participant’s user identity.
         */
        userIdentity: UserIdentity;
    }

    /**
     * A dictionary containing options for the share UI.
     */
    export interface SharingUIOptions
    {
        /**
         * The Record object that is being shared.
         */
        record?: RecordReceived;

        /**
         * A thumbnail representing the share.
         */
        shareThumbnail?: string;

        /**
         * The title of the share.
         */
        shareTitle?: string;

        /**
         * The type of the share.
         */
        shareType?: string;

        /**
         * The supported participant access to the share. An array of strings
         * with values PRIVATE or PUBLIC.
         */
        supportedAccess: Array<string>;

        /**
         * The supported read- write permissions for the share. An array of
         * strings with values READ_WRITE or READ_ONLY.
         */
        supportedPermissions: Array<string>;

        /**
         * A ZoneID or zone name that identifies the record zone in the
         * database where you want to perform the operation. The default is the
         * database default zone. This property is required.
         */
        zoneID: ( ZoneID | string );
    }

    /**
     * Represents the results of sharing a record with other users.
     */
    export interface SharingUIResult
    {
        /**
         * The record that was accepted.
         */
        share?: ShareRecordReceived;
    }

    /**
     * A sort descriptor dictionary determines the order of the fetched
     * records. Please use SortDescriptorLike, RecordFieldSortDescriptor, and
     * SystemFieldSortDescriptor instead of SortDescriptor.
     *
     * @deprecated
     * This interface is deprecated.
     */
    export interface SortDescriptor extends SortDescriptorLike
    {
        /**
         * A Boolean value that indicates whether the fetched records should be
         * sorted in ascending order. If true, the records are sorted in
         * ascending order. If false, the records are sorted in descending
         * order. The default value is true.
         */
        ascending?: boolean;

        /**
         * The name of a field belonging to the record type. Used to sort the
         * fetched records. This key is required.
         */
        fieldName: string;

        /**
         * A field-value dictionary that is the reference location to use when
         * sorting. Records are sorted based on their distance to this
         * location. Used only if fieldName is a Location type
         */
        relativeLocation?: RecordField;
    }

    /**
     * A sort descriptor dictionary determines the order of the fetched
     * records.
     */
    export interface SortDescriptorLike
    {
        /**
         * A Boolean value that indicates whether the fetched records should be
         * sorted in ascending order. If true, the records are sorted in
         * ascending order. If false, the records are sorted in descending
         * order. The default value is true.
         */
        ascending?: boolean;

        /**
         * A field-value dictionary that is the reference location to use when
         * sorting. Records are sorted based on their distance to this
         * location. Used only if fieldName is a Location type.
         */
        relativeLocation?: RecordField;

        /**
         * The name of a field belonging to the record type. Used to sort the
         * fetched records. If you include this key, don’t include the
         * systemFieldName key.
         */
        fieldName?: string;

        /**
         * The name of a system field instead of a record type specific field.
         * Used to sort the fetched records. If you include this key, don’t
         * include the fieldName key.
         */
        systemFieldName?: string;
    }

    /**
     * A subscription, which is a persistent query on the server that tracks
     * the creation, deletion, and modification of records.
     */
    export interface Subscription
    {
        /**
         * An array of keywords that specify the actions that should trigger
         * push notifications. Possible values in the array are "create",
         * "update", and "delete". This key is not used if query is null.
         */
        firesOn?: Array<( 'create' | 'delete' | 'update' )>;

        /**
         * A Boolean value indicating whether push notifications should be
         * triggered once. If true, push notifications are sent once. If false,
         * they can be sent multiple times. The default value is false.
         */
        firesOnce?: boolean;

        /**
         * A dictionary containing information about how the system should
         * alert the user.
         */
        notificationInfo?: NotificationInfo;

        /**
         * The matching criteria to apply to records.
         */
        query?: Query;

        /**
         * A unique identifier for the subscription.
         */
        subscriptionID?: string;

        /**
         * The type of subscription. Possible values are "query", and "zone".
         * This key is required.
         */
        subscriptionType: ( 'query' | 'zone' | SubscriptionType );

        /**
         * Dictionary that identifies a record zone to monitor in the database,
         * described in CloudKit JS Data Types.
         */
        zoneID?: ZoneID;

        /**
         * A Boolean value determining whether all zones should be searched. If
         * true, all zones are searched. If false, the default zone is
         * searched.
         */
        zoneWide?: boolean;
    }

    /**
     * A filter dictionary defines the logical conditions for determining
     * whether a record matches the query.
     */
    export interface SystemFieldFilter extends FilterLike
    {
        /**
         * The name of a system field instead of a record type specific field.
         * This key is required.
         */
        systemFieldName: string;
    }

    /**
     * A sort descriptor dictionary determines the order of the fetched
     * records.
     */
    export interface SystemFieldSortDescriptor extends SortDescriptorLike
    {
        /**
         * The name of a system field instead of a record type specific field.
         * Used to sort the fetched records. This key is required.
         */
        systemFieldName: string;
    }

    /**
     * Information to identify a user.
     */
    export interface UserIdentity
    {
        /**
         * Information used to fetch a user.
         */
        lookupInfo: UserLookupInfo;

        /**
         * An object that contains the user’s name. Use the familyName key to
         * get the last name, and the givenName key to get the first name.
         */
        nameComponents: NameComponents;

        /**
         * The name of the user record.
         */
        userRecordName: string;
    }

    /**
     * Information that can be used to fetch a user.
     */
    export interface UserLookupInfo
    {
        /**
         * The user’s email address.
         */
        emailAddress?: string;

        /**
         * The user’s phone number.
         */
        phoneNumber?: string;

        /**
         * The name of the user record.
         */
        userRecordName?: string;
    }

    /**
     * An identifier for a zone, which is an area in a database for organizing
     * related records.
     */
    export interface ZoneID
    {
        /**
         * String representing the zone owner’s user record name. Use this key
         * to identify a zone owned by another user. The default value is the
         * current user’s record name.
         */
        ownerRecordName?: string;

        /**
         * The name that identifies the record zone. The default value is
         * _defaultZone, which indicates the default zone of the current
         * database. This key is required.
         */
        zoneName: string;
    }

    /////
    //
    //  Variables
    //
    /////

    export let logToConsole: boolean;
}

declare global
{
    interface Window
    {
        CloudKit: typeof CloudKit;
    }
}

export = CloudKit;
