import { post } from 'axios'

const clientId = '2fe89328a7354fda9e811f1730f784a5'
const clientSecret = 'PFYPJhISoQdpu5SZ7lyYf6YEhC5P8sJ5'

// API URL para hacer oauth
const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()
  body.append('grant_type','client_credentials')

  const config = {
    headers: {'Content-Type': 'multipart/form-data'},
    auth: { username: clientId, password: clientSecret }
  }

    return post(API_URL,body,config)
    
}

export{
    getToken
}