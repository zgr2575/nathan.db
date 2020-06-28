(async() => {
    await db.set("Key1","Value");
    console.log(await db.get("Key1"));
    console.log(await db.get("Key1"))
    console.log(await db.get("Key2"));
})()














