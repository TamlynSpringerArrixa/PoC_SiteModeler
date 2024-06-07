export default {
    createUser: {
      query: `mutation createUser($input: CreateUserInput!) {
        createUser(input: $input) {
          user {
            id
            name
            email
            age
          }
        }
      }`,
      variables: {
        input: {
          user: {
            name: "John Doe",
            email: "john.doe@example.com",
            age: 30
          }
        }
      },
      operationName: 'createUser'
    },
    getUsers: {
      query: `query getUsers {
        allUsers {
          nodes {
            id
            name
            email
            age
          }
        }
      }`,
      variables: null,
      operationName: 'getUsers'
    },
    updateUser: {
      query: `mutation updateUser($id: Int!, $patch: UpdateUserPatch!) {
        updateUserById(input: { id: $id, patch: $patch }) {
          user {
            id
            name
            email
            age
          }
        }
      }`,
      variables: {
        id: 1,
        patch: {
          name: "John Updated",
          age: 31
        }
      },
      operationName: 'updateUser'
    },
    deleteUser: {
      query: `mutation deleteUser($id: Int!) {
        deleteUserById(input: { id: $id }) {
          user {
            id
            name
            email
            age
          }
        }
      }`,
      variables: {
        id: 1
      },
      operationName: 'deleteUser'
    }
  };
  