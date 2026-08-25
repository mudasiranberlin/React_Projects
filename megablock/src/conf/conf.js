const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    approjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appdatabaseid:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appcollectionid:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appbucketid:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
export default conf