# Liskov substitution principle (LSP):

## Definition
*If for each object o1 of type S there is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when o1 is substituted for o2 then S is a subtype of T.*

## LSP done right
```
+---------------+        +--------------+
|    Billing    |<-------|  License<I>  |<|--+
+---------------+        +--------------+    |
                                             |
                                             |
            +--------------------------------+------+
            |                                       |
    +---------------+                      +---------------+       
    |   Personal    |                      |   Buiseness   |
    |   License     |                      |   License     |
    +---------------+                      +---------------+

```

`PersonalLicense` and `BuisenessLicense` are substitute of `License`. That said, this design conforms LSP.

##  LSP violation
```
+---------------+        
|    Billing    |<------------------+
+---------------+                   |
        ^                           |
        |                           |
        |                           |
        |                           |
+---------------+          +---------------+       
|   Personal    |          |   Buiseness   |
|   License     |          |   License     |
+---------------+          +---------------+

```
Now we need to do type checking to know which class is used. This violates LSP.


## Sources
* Clean architecture - Robert C. Martin