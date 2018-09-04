# PIE OF THE DAY

# CONTENTS

- [Problem](#Problem)
- [Architecture](#Architecture)
- [Deployment](#Deployment)

## **PROBLEM**

Jake and his work mates absolutely love pies! In fact, they love pies so much, that they only eat them for lunch. They hate going out of their comfort zone to try out other lovely foods such as: fried rice, banh mi, pho, sushi, fried chicken, etc. Jake and friends tend to order their pies at 10am sharp, so they are guarenteed to get the pies they want (Jake usually mixes it up and goes to a different pie shop for each day of the week). Each pie shop has a 'Pie of the day' that are typically cheaper than the other pies. Jake calls up each shop he knows to find out which shop has the cheapest 'Pie of the day'. Jake and friends only get the 'Pie of the day' since they love variety in their pies and it's cheap. Jake places the order and once it reaches lunch time, Jake and friends go to their selected store to collect their pies.

However, since the price of 'Pie of the day' at each shop changes each day, Jake find's it a pain to call up each shop to find out which 'Pie of the day' is cheapest. He would really like a web application that would make this process easier for him.

## **ARCHITECTURE**

### APP COMPONENT

- React router has been set up.
- It saves pieOfTheDay in savedlist.

### NAVBAR COMPONENT

- It contains navbar links.

### STORELIST COMPONENT

- It loads the stores from pies.now.sh/stores (`componentDidMount()`)
- It filters the stores between startIndex and endIndex, and display the filtered stores in a list (`render()`)

### STORE COMPONENT

- It loads the pies for its particular store (`componentDidMount()`)
- It displays the pie of the day (`render()`)

### FAVOURITE COMPONENT

- It loads pies selected using like buttons.

### PAGINATION COMPONENT

- It computes total pages and get array of pages.
- It displays buttons for pagination.

## **DEPLOYMENT**
