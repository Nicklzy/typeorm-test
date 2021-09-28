import "reflect-metadata";
import {createConnection} from "typeorm";
import {Post} from "./entity/Post";

createConnection().then(async connection => {
    await connection.manager.save([1,2,3,4,5,6,7,8,9,10,11].map(item => (
        new Post({
            title: `No.${item} title`,
            content: `No.${item} content`
        })
    )))
    connection.close()

}).catch(error => console.log(error));
