# Dependency inversion principle (ISP):

## Definition
*DIP tells us that the most flexible systems are those in which source code dependencies refer only to abstractions, not to concretations*

* Every change to an abstract interface corresponds to a change to its concrete implementations. Conversely, changes to concrete implementations do not always, or even usually, require changes to the interfaces that they implement. Therefore interfaces are less volatile than implementations.
* It is the volatile concrete elements of our system that we want to avoid depending on.

*Stable software architectures are those that avoid depending on volatile concretions, ant that favor the use of stable abstract interfaces*

This implication boils down to a set of very specific coding practices:
* **Don't refer to volatile concrete class**: Refer to abstract interfaces instead. Puts severe constraints on the creations of objects and generally enforces the use of *Abstract Factories*.
* **Don't derive from volatile concrete class**: This is a corollary to the previous rule.
* **Don't override concrete functions**: Concrete functions often require source code dependencies. When you override those functions, you do not eliminate those dependencies - indeed, you inherit them. To manage thos dependencies, you should make the function abstract and create multiple implementations.
* **Never mention the name of anything concrete and volatile**: Restatement of the principle itself.

Flow of control: is the order in which individual statements, instructions or function calls of an imperative program are executed or evaluated.

Flow of control direction should be in opposite direction of the source code dependencies. Which is why it's called dependency inversion principle.

Example:
```
A ---> B = B includes A
A --|> B = A implements B

Abstract space                                                  |  Concrete space
                                                                |
        +-----------+        +-----------------+                |      +--------------+
        |    APP    |------->|    Service<I>   |<|--------------|------| ConcreteImpl |
        +-----------+        +-----------------+                |      +--------------+
                |                                               |
                |            +------------------------+         |      +--------------------+
                +----------->|    ServiceFactory<I>   |<|-------|------| ServiceFactoryImpl |
                             +------------------------+         |      +--------------------+
                                                                |

        --------------------------------------Flow of control-------------------------------------->
        <--------------------------------Source code dependencies-----------------------------------
```


## Sources
* Clean architecture - Robert C. Martin