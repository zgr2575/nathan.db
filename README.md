# <u>Nathan.DB

Nathan.DB is a fast, lightweight, easy-to-use database. It was created by **Nathan/nathan_dev**.

# <u>About

Nathan.DB can help you in many ways:

- **Save data to MongoDB in seconds** - Using this database, you can save data to your database in seconds! Add new Schemas/Collections to your MongoDB Atlas in the blink of an eye!
  <br>
- **Fast and lightweight** - Compared to databases like quick.db, salvage.db is the flash! It is much easier to use and doesn't have a lot of folders, making it very compact!
  <br>
- **Easy to use** - Making a new client and saving data is very easy! You can do it in seconds!

# <u>Installation

To install nathan.db, simply run this command in the terminal:

```
npm i nathan.db
```

<br>

# <u>Examples

If you do not know how to use nathan.db, follow the examples below to get you started!

## <u>Creating a Client

To create a new MongoDB Client, use this code:

![Create Client](https://discord.com/channels/716596041327312907/716596041327312910/726815033950208022)
<br>

This will save the data that you have inputted through your database. This will save a new Schema/Collection into your MongoDB Atlas, with the properties in the "schema". This means the name would be the name inputted in "name" and the MongoURI would be "mongoURI". The last line waits until it connects to your database, and after it has done that, it saves all the data.

## <u>Setting and Getting Data

Here are some examples to introduce you to setting, getting, and finding values.

![Setting getting hasing data](https://discord.com/channels/716596041327312907/716596041327312910/726815036902735923)
<br>
This example saves the key of "Key1" with the value of "Value" to the database. Then, it will console.log "Value" as that is the value of the key. When awaiting db.has it will return true or false. In this example it would console.log true, as Key1 exists. It would then console.log false as Key2 does not exist.
<br>

# <u>Dependencies

nathan.db has 2 Dependencies:

1. Mongoose
2. This.db<br><br>