
const categories = [
    {short_name: "LN", name: "Lunch", items: ["Salad", "Chicken Soup", "Sandwich"]},
    {short_name: "DN", name: "Dinner", items: ["Steak", "Salmon", "Vegetarian Plate"]},
    {short_name: "SU", name: "Sushi", items: ["California Roll", "Nigiri", "Sashimi"]},
    {short_name: "BR", name: "Breakfast", items: ["Pancakes", "Eggs Benedict", "Fruit Bowl"]}
];

function getRandomCategory() {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
}

function loadMenuItems() {
    const category = getRandomCategory();
    const itemsHtml = category.items.map(item => `<li>${item}</li>`).join('');
    $("#menuItems").html(`<div class="col-sm-12"><h3>${category.name}</h3><ul>${itemsHtml}</ul></div>`).hide().fadeIn(500);
}

function loadHomePage() {
    ("#menuItems").fadeOut(500, function() { $(this).empty(); });
}
