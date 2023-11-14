import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        videoFile : {
            type : String,
            required : true
        },
        thumbnail : {
            type : String,
            required : true
        },
        owner : [
            {
            type : Schema.Types.ObjectId,
            ref : "User"
            }
        ],
        title : {
            type : String,
        },
        description : {
            type : String,
        },
        duration : {
            type : Number,
        },
        views : {
            type : Number
        },
        isPublished : {
            type : Boolean
        }
    },
    {timestamps : true}
    )


    videoSchema.plugin(mongooseAggregatePaginate)

    export const Video = mongoose.model("Video", videoSchema);