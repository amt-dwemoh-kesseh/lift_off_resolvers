import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel, AuthorModel } from "../models";


export class TrackAPI extends RESTDataSource {
    constructor(){
      super();
      this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
    }
    

    getTracksForHome() {
        return this.get<TrackModel[]>('tracks');
      }
      getAuthor(authorId: string) {
        return this.get<AuthorModel>(`author/${authorId}`);
      }


    }