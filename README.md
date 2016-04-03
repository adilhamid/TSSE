## TSSE (Technology shopping support environment)
### Introduction
By a Technology Shopping Support Environment (TSSE), we mean an interactive environment that helps people engage in comparative shopping, in which they make decisions about what specific product to buy, given a particular device category and associated needs. A shopper chooses the final product by comparing multiple candidate products.

### Technology stack used
* **Backend** Google's **[Firebase](https://www.firebase.com/)** has been used to store the data in form of JSON. Firebase makes its really easy to save and retrieve the data, hence it takes off the burden of wrting own backend. It has support for java script.
* **Frontend** Its simple html/css and javascript. **[Bootstrap](http://getbootstrap.com/)** and **[Jquery](https://jquery.com/)** are used to make it interactive and responsive. 

### Information Extraction tools and sources
* **[BigSemantics](https://github.com/ecologylab/BigSemantics/wiki#using-bigsemantics-in-web-applications)** has been used to extract metadata information for the smart phones. Following are the wrappers used to extract the information
    - [Amazon](https://www.amazon.com/) : It is used to get the price, ratings and reviews for the product.
    - [ebay](http://www.ebay.com/) : It is used to get the image and full name for the product.
    - [newegg](http://www.newegg.com/) : It is used to get the specifcations for the product.
    
### Live Demo
Use the TSSE web **[app](http://people.tamu.edu/~sumeet.singh/TSSE/)** . Click the get top mobile phones button, compare them and click to buy the one you like.

### Architecture Diagram
![alt text](http://imgur.com/xzoy9H5.png)

### Bioler plate code used
Some of the html/css code has been used from the following source to start with.
* **[Shop Home Page](https://github.com/BlackrockDigital/startbootstrap-shop-homepage)** Css has been borrowed for carousel on the home page.
* **[Side bar Navigation](https://github.com/BlackrockDigital/startbootstrap-simple-sidebar)** Css has been borrowed for left pane of facets.
* **[Mobile Details Page](http://bootsnipp.com/snippets/featured/product-page-for-online-shop)** Css/Html has been borrowed for details page for a particular mobile.
