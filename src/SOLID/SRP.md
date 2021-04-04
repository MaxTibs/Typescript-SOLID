# Single responsibility principle (SRP):

## Definition:
A module should be responsible to one, and only one, actor.

> Module is a cohesive set of functions and data structure.



## Violation of SRP.
Let say we have 3 actors:
 1. CFO wants to know employee pay total
 2. COO wants to know employee total work hour
 3. CTO wants to save employee information in database

And we put every functions in Employee class:

```
class Employee {
    /**
    * Used by accounting departement to report to CFO
    */
    calculatePay() {}

    /**
    * Used by human resources to reports to the COO
    */
    reportHours() {}

    /**
    * Used by DB administrators to reports to CTO
    */
    save() {}
}
```

## Solution
```
struct EmployeeData {
    ...    
}

class PayCalculator {
    calculatePay(employeeData: EmployeeData) {
        ...
    }
}

class HourReporter {
    reportHours(employeeData: EmployeeData) {
        ...
    }
}

class EmployeeSaver {
    saveEmployee(employeeData: EmployeeData) {
        ...
    }
}

```
Splitting the code in 3 classes provides separation of concerns. Each class has now only on reason to change (actor).


If you need to provide an 'all-in' class to help having to remember the 3 classes, you can use the Facade pattern:
```
class EmployeeFacade {
    calculatePay(employeeData: EmployeeData) {
        return Paycalculator.calculatePay(employeeData);
    }

    reportHours(employeeData: EmployeeData) {
        return HourReporter.reportHours(employeeData);
    }

    saveEmployee(employeeData: EmployeeData) {
        return EmployeeSaver.saveEmployee(employeeData);
    }
}
```
The facade contains very little code. It is responsible for instantiating and delegating to the classes with functions.

Finally, if you prefer to keep the buiseness rules closer to the data, you do it like that:
```
class Employee {
    private employeeData: EmployeeData;

    calculatePay() {
        Paycalculator.calculatePay(this.employeeData);
    }

    reportHours() {
        HourReporter.reportHours(this.employeeData);
    }

    save() {
       // Save directly in database, no need to EmployeeSaver class.
    }


}
```

## Sources
* Clean architecture - Robert C. Martin