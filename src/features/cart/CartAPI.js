export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    resolve({ data });
  });
}

export function fetchItemsByUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch(
      "http://localhost:8080/cart?user.id=" + userId
    );
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart?id=" + update.id, {
      method: "POST",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteItemFromCart(itemID) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/cart?id=" + itemID, {
      method: "POST",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data: { id: itemID } });
  });
}
