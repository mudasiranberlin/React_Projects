import { Client, Account, ID,Databases,Storage,Query } from "appwrite";
import conf from "../conf/conf";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.approjectId);
        this.databases = new Databases(this.Client)
        this.bucket = new Storage(this.client)
    
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appdatabaseid,
                conf.appcollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Update",error);
        }
    }

    async updatePost({slug,content,featuredImage,status}) {
        try {
            return await this.databases.updateDocument(
                conf.appdatabaseid,
                conf.appcollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            
        } catch (error) {
            console.log("Update",error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appdatabaseid,
                conf.appcollectionid,
                slug

            )
            
        } catch (error) {
            console.log("delete",error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appdatabaseid,
                conf.appcollectionid,
                slug
            )
            
        } catch (error) {
             console.log("delete",error);
             return false
        }
    }
    async getPosts(queries= [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appdatabaseid,
                conf.appcollectionid,
                queries,
            )
        } catch (error) {
            console.log("delete",error);
             return false
        }
    }
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appbucketid,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("delete",error);
             return false
        }
    }

    async deletefile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appbucketid,
                fileId
            )
            return true
            
        } catch (error) {
            console.log("delete",error);
             return false
        }
    }
    
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appbucketid,
            file
        )
    }

}

const service = new Service()

export default service