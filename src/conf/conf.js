const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionIdFriends: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_FRIENDS),
    appwriteCollectionIdAllChatPairs: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID_All_CHAT_PAIRS),
}

export default conf