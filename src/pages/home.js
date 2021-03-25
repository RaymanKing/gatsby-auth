import * as React from "react"

import { navigate } from "gatsby"
import Layout from "../components/layout"
//import firebase from "gatsby-plugin-firebase"
import SEO from "../components/seo"

import 'firebase/auth'
import firebase from "firebase/app"

const home = () => {
 
  let user = firebase.auth().currentUser
  //let i = user.getIdToken()
  //console.log(i)
  if(user){
    // --
    console.log(user)
    //Una opcion
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user); // It shows the Firebase user
            console.log(firebase.auth().user); // It is still undefined
            user.getIdToken().then(function(idToken) {  // <------ Check this line
               //console.log(idToken); // It shows the Firebase token now
               externalApiRest(idToken)
            });
        }
    });
    // --
  }else{
    alert ('No hay ningún usuario conectado')
    navigate("/")
  }
  
  function externalApiRest(token){
    console.log(token)
    var url = "https://so0y5ln90d.execute-api.eu-central-1.amazonaws.com/authApi"
    fetch(url, {
      method: 'GET', // or 'PUT',
      headers:{
        "Authorization": "Bearer " + token,
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  return(

    <Layout>
      <SEO title="Authorization" />
      <h1>Hi!</h1>
      <p>Welcome auth!</p>
    
    </Layout>
  )
}

export default home

