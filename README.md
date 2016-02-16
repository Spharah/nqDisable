# nqDisable
Custom directive to disable QuantumUI nqSelect

## Overview
This is the custom directive to enable or disable searchable QuantumUI nqSelect.

## Installation
Clone the project and update your scripts section

```
<script src="app/lib/nqSelect.js"></script>
```

## Usage

Add `nq-disabled` inside the select element and set its value either to `true` or `false`. true to disable the element, false to enable the element.

```
<select data-nq-select data-nq-disabled="true" ng-model="$parent.MyModel" .....
```

The element must have `ng-model` 
