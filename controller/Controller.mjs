import URL from "../model/Model.mjs";
import { nanoid } from "nanoid";
export const generateNewUrl = async (req, res) => {
   const body = req.body;
   const redirectURL = body.url;
   const requiredIdLength =body.length;

   const ShortID=nanoid(requiredIdLength);
   if(!redirectURL)
   {
    return res.status(404).json({message:"Request URL is required"});
   }
   const NewURL=new URL({
    shortID:ShortID,
    redirectURL:redirectURL,
    visitHistory:[]
   });
   NewURL.save();
  return res.status(201).json({shortID:ShortID, message:"URL created successfully"});

}
export const redirectToShortURL = async (req, res) => {
    let shortID=req.params.shortID;
    const entry=await URL.findOneAndUpdate({shortID}
        ,
        {$push:{
            visitHistory:
            {timestamp:new Date()}
        }});

        res.redirect(entry.redirectURL);
}
export const handlegetVisitHistory = async (req, res) => {
    let shortID=req.params.shortID;
    const entry=await URL.findOne({shortID});
    if(!entry)
    {
        return res.status(404).json({message:"Short ID not found"});
    }
    return res.json({
        totalclick:entry.visitHistory.length,
        analytics:entry.visitHistory
    });
 
}
