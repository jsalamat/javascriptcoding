//------------------------------------------------------------------------

const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto']
}

console.log(restaurant);

restaurant['appetizers'] = ['Fried Calamari', 'Bruschetta'];
restaurant.desserts = ['Homemade Tiramisu', 'Cannoli'];

console.log(restaurant);

restaurant['appetizers'] = ['Fried Calamari', 'Bruschetta', 'Caprese Salad'];
restaurant.desserts = ['Homemade Tiramisu', 'Canolli', 'Cheesecake'];

console.log(restaurant);

//---------------------------------Methods---------------------------------
//-------------------------------------------------------------------------

const restaurantB = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurantB: () => {
    return 'Unlock the door, flip the open sign. We are open for business!';
  },
  closeRestaurantB: () => {
    return 'Lock the door, flip the open sign. We are closed.'
  }
};

console.log(restaurantB.openRestaurantB());

console.log(restaurantB.closeRestaurantB());

//---------------------------------Methods: ES6---------------------------
//------------------------------------------------------------------------

const restaurantC = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  openRestaurantC() {
    return 'Unlock the ES6 door, flip the open sign. We are open for business!';
  },
  closeRestaurantC() {
    return 'Lock the ES6 door, flip the open sign. We are closed.'
  }
};

console.log(restaurantC.openRestaurantC());

console.log(restaurantC.closeRestaurantC());

//------------------------------------------------------------------------
//------------------------------------------------------------------------