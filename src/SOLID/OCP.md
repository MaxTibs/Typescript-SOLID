# Open-closed principle (OCP):

## Definition:
A software artifact should be open for extension but closed for modifications

OCP is achieved by partitionning the processes into classes, and separating those classes in components.

If component A should be protected from changes in component B, then component B should depend on component A.

```
Arrow points to dependency.

+-------+     +-------+
|       |     |       |
|   A   |<----|   B   |
|       |     |       |
+-------+     +-------+

```

To achieve that one-way dependencies (because one would have include B in A, hence not protecting A from changes in B) you can define interfaces in A that can be extended in B. The interface will reverse the dependencies allowing A not to know B.

Let's pretend we want to protect `Controller` from change in `ScreenPresenter`

### Violation of OCP
```
+-----------------------------------+    +--------------------------+
|             Controller            |    |     ScreenPresenter      |
|                                   |    |                          |
|   +---------------------------+   |    |    +-----------------+   |
|   | FinancialReportController |---|----|--->| ScreenPresenter |   |
|   +---------------------------+   |    |    +-----------------+   |
|                                   |    |                          |
+-----------------------------------+    +--------------------------+
```

In this case, if `ScreenPresenter` changes, then `Controller` will likely change!


### OCP done right
```
A <---- B = B includes A
A <|--- B = B implements A

+---------------------------------------------------------------------------+   +-------------------------+
|                               Controller                                  |   |     ScreenPresenter     |
|                                                                           |   |                         |
|   +---------------------------+       +-----------------------------+     |   |   +-----------------+   |
|   | FinancialReportController |------>| FinancialReportPresenter<I> |<|-----------| ScreenPresenter |   |
|   +---------------------------+       +-----------------------------+     |   |   +-----------------+   |
|                                                                           |   |                         |
+---------------------------------------------------------------------------+   +-------------------------+

or

+---------------------------------------------------------------------------+   +------------------------+
|                               Controller                                  |   |     PrintPresenter     |
|                                                                           |   |                        |
|   +---------------------------+       +-----------------------------+     |   |   +----------------+   |
|   | FinancialReportController |------>| FinancialReportPresenter<I> |<|-----------| PrintPresenter |   |
|   +---------------------------+       +-----------------------------+     |   |   +----------------+   |
|                                                                           |   |                        |
+---------------------------------------------------------------------------+   +------------------------+

```

In that case, changes in the `Presenters` will not results in changes in `Controller`. That said, `Controller` is open for extension, but closed for modifications because
`Presenters` can be "plugged in" in `Controller` without the need to modify the `Controller`.

The goal is to protect higher-level components from changes in lower-level components.

## Sources
* Clean architecture - Robert C. Martin