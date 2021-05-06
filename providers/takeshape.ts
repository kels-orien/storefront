import { GraphQLClient } from 'graphql-request'

// We provide a thin wrapper around a configured GraphQL client

export class Client {
  token: string
  endpoint: string
  client: GraphQLClient

  constructor(projectId: string, apiKey: string) {
  
    this.token = apiKey
    this.endpoint = `https://api.takeshape.io/project/${projectId}/v3/graphql`
    this.client = new GraphQLClient(this.endpoint, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })
  }
  async graphql(query: string, variables?: object): Promise<any> {
  
    return this.client.request(query, variables)
  }
}

// We create and provide a singleton TakeShape client as our default export
let ts : Client

function createClient(): Client {
  if (!ts) {
    ts = new Client(
      process.env.NEXT_PUBLIC_TAKESHAPE_PROJECT_ID,
      process.env.NEXT_PUBLIC_TAKESHAPE_KEY
    )
  }
  return ts
}
export default createClient()
