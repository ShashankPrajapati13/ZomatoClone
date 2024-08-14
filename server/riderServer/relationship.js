// Define associations

const Admin = require("./models/admin");
const Chat = require("./models/chat");
const Complaint = require("./models/complaint");
const Delivery = require("./models/delivery");
const Dish = require("./models/dish");
const Location = require("./models/location");
const Menu = require("./models/menu");
const Order = require("./models/order");
const Payment = require("./models/payment");
const Promotion = require("./models/promotion");
const Restaurant = require("./models/restaurant");
const Review = require("./models/review");
const Rider = require("./models/rider");
const ServiceArea = require("./models/serviceArea");
const User = require("./models/user");

// User associations
User.hasMany(Order, { foreignKey: 'userId', as: 'orders' });
User.hasMany(Review, { foreignKey: 'userId', as: 'reviews' });
User.hasMany(Complaint, { foreignKey: 'userId', as: 'complaints' });
User.hasMany(Chat, { foreignKey: 'senderId', as: 'sentChats' });
User.hasMany(Chat, { foreignKey: 'receiverId', as: 'receivedChats' });
User.hasMany(Location, { foreignKey: 'userId', as: 'locations' });

// Admin associations
// (Assuming Admins have some direct relationships, like managing users or restaurants)
Admin.hasMany(User, { foreignKey: 'adminId', as: 'managedUsers' });

// Restaurant associations
Restaurant.hasMany(Menu, { foreignKey: 'restaurantId', as: 'menus' });
Restaurant.hasMany(Dish, { foreignKey: 'restaurantId', as: 'dishes' });
Restaurant.hasMany(Order, { foreignKey: 'restaurantId', as: 'orders' });
Restaurant.hasMany(Review, { foreignKey: 'restaurantId', as: 'reviews' });
Restaurant.hasMany(Promotion, { foreignKey: 'restaurantId', as: 'promotions' });
Restaurant.hasMany(ServiceArea, { foreignKey: 'restaurantId', as: 'serviceAreas' });

// Rider associations
Rider.hasMany(Delivery, { foreignKey: 'riderId', as: 'deliveries' });

// Dish associations
Dish.belongsTo(Restaurant, { foreignKey: 'restaurantId', as: 'restaurant' });
Dish.hasMany(Review, { foreignKey: 'dishId', as: 'reviews' });
Dish.belongsTo(Menu, { foreignKey: 'menuId', as: 'menu' });

// Order associations
Order.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Order.belongsTo(Restaurant, { foreignKey: 'restaurantId', as: 'restaurant' });
Order.hasOne(Delivery, { foreignKey: 'orderId', as: 'delivery' });
Order.hasOne(Payment, { foreignKey: 'orderId', as: 'payment' });
Order.hasMany(Complaint, { foreignKey: 'orderId', as: 'complaints' });

// Delivery associations
Delivery.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });
Delivery.belongsTo(Rider, { foreignKey: 'riderId', as: 'rider' });

// Chat associations
Chat.belongsTo(User, { foreignKey: 'senderId', as: 'sender' });
Chat.belongsTo(User, { foreignKey: 'receiverId', as: 'receiver' });

// Complaint associations
Complaint.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Complaint.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });

// Review associations
Review.belongsTo(User, { foreignKey: 'userId', as: 'user' });
Review.belongsTo(Restaurant, { foreignKey: 'restaurantId', as: 'restaurant' });
Review.belongsTo(Dish, { foreignKey: 'dishId', as: 'dish' });

// Location associations
Location.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Menu associations
Menu.belongsTo(Restaurant, { foreignKey: 'restaurantId', as: 'restaurant' });
Menu.hasMany(Dish, { foreignKey: 'menuId', as: 'dishes', onDelete: 'CASCADE' });

// Payment associations
Payment.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });

// Promotion associations
Promotion.belongsTo(Restaurant, { foreignKey: 'restaurantId', as: 'restaurant' });

// Service Area associations
ServiceArea.belongsTo(Restaurant, { foreignKey: 'restaurantId', as: 'restaurant' });

module.exports = {
    User,
    Admin,
    Restaurant,
    Rider,
    Dish,
    Order,
    Delivery,
    Chat,
    Complaint,
    Review,
    Location,
    Menu,
    Payment,
    Promotion,
    ServiceArea
};
