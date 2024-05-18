import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "./UserDetailSlice";


export const store = configureStore({
 reducer: {   
    app : userDetail,
 }

})