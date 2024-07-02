import conf from "../conf/conf";
import { Client, Databases, Query, ID } from "appwrite";

export class AppwriteService {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createPost(email) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          email,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: createPost :: error", error);
    }
  }

  async updateChats(id, {chats, chatOwner}) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdAllChatPairs,
        id,
        {
          chats,
          chatOwner,
        }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  // async getFriends(email) {
  //   try {
  //     return await this.databases.getDocument(
  //       conf.appwriteDatabaseId,
  //       conf.appwriteCollectionIdFriends,
  //       email,
  //     );
  //   } catch (error) {
  //     console.log("Appwrite serive :: getPost :: error", error);
  //     return false;
  //   }
  // }

  async getChats(id) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdAllChatPairs,
        id,
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  async getFriends(email, queries = [Query.equal("email", email)]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionIdFriends,
        queries
      );
    } catch (error) {
      console.log("Appwrite serive :: getPosts :: error", error);
      return false;
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;
