define({ "api": [
  {
    "type": "post",
    "url": "/categories",
    "title": "Create Category",
    "name": "CreateCategory",
    "group": "Categories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Return the id of created category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n  {\n    \"error\": \"The category was not created\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Category/CategoryCreate.js",
    "groupTitle": "Categories"
  },
  {
    "type": "delete",
    "url": "/categories/:id",
    "title": "Delete Category",
    "name": "DeleteCategory",
    "group": "Categories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n  {\n    \"error\": \"Category does not exists\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Category/CategoryDelete.js",
    "groupTitle": "Categories"
  },
  {
    "type": "get",
    "url": "/categories/:id",
    "title": "View Category",
    "name": "GetSingleCategory",
    "group": "Categories",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/Category/CategoryView.js",
    "groupTitle": "Categories"
  },
  {
    "type": "put",
    "url": "/categories/:id",
    "title": "Update Category",
    "name": "UpdateCategory",
    "group": "Categories",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"message\": \"Category updated successfully!\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n  {\n    \"error\": \"Category does not exists\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Category/CategoryUpdate.js",
    "groupTitle": "Categories"
  },
  {
    "type": "delete",
    "url": "/settings/:id",
    "title": "Delete Setting",
    "name": "DeleteSetting",
    "group": "Setting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Setting id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n  {\n    \"error\": \"Custom Setting does not exists\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Setting/SettingDelete.js",
    "groupTitle": "Setting"
  },
  {
    "type": "post",
    "url": "/tags",
    "title": "Create Tag",
    "name": "CreateTag",
    "group": "Tags",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Tag name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Return the id of created tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n  {\n    \"error\": \"The tag was not created\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Tag/TagCreate.js",
    "groupTitle": "Tags"
  },
  {
    "type": "delete",
    "url": "/tags/:id",
    "title": "Delete Tag",
    "name": "DeleteTag",
    "group": "Tags",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Tag id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n  {\n    \"error\": \"Tag does not exists\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Tag/TagDelete.js",
    "groupTitle": "Tags"
  },
  {
    "type": "get",
    "url": "/tags/:id",
    "title": "View Tag",
    "name": "GetSingleTag",
    "group": "Tags",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/Tag/TagView.js",
    "groupTitle": "Tags"
  },
  {
    "type": "put",
    "url": "/tags/:id",
    "title": "Update Tag",
    "name": "UpdateTag",
    "group": "Tags",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"message\": \"Tag updated successfully!\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n  {\n    \"error\": \"Tag does not exists\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/Tag/TagUpdate.js",
    "groupTitle": "Tags"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create User",
    "name": "CreateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "active",
            "defaultValue": "1",
            "description": "<p>Sets users to be active or not</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "photo",
            "description": "<p>Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fullname",
            "description": "<p>Full name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>Return the id of created user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n  {\n    \"error\": \"The user was not created\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/User/UserCreate.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n  {\n    \"error\": \"User does not exists\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/User/UserDelete.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List all Users",
    "name": "GetAllUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Users list.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/Category/CategoryList.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List all Users",
    "name": "GetAllUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Users list.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/Tag/TagList.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List all Users",
    "name": "GetAllUsers",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Users list.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/User/UserList.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "View User",
    "name": "GetSingleUser",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fullname",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/controllers/User/UserView.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update User",
    "name": "UpdateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "active",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "photo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fullname",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n    \"message\": \"User updated successfully!\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n  {\n    \"error\": \"User does not exists\"\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/User/UserUpdate.js",
    "groupTitle": "Users"
  }
] });
