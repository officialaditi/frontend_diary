function example() {
    const x = 10;
    // x = 20; // ❌ Error: Assignment to constant variable
    
    const obj = { name: "John" };
    obj.name = "Doe"; // ✅ Allowed (modifying object properties)
    
    console.log(obj.name); // Doe
}
example();
