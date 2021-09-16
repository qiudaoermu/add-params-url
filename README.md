## add params to current router URL with Vue
## methods

1. addParams: add params to url
2. getParams: return params

## example:

```

import Rt from "add-params-url";

const params = {ispName: 22}
new Rt(this).addParams(params)

before: http://localhost:4000/buy/buyOrder
after: http://localhost:4000/buy/buyOrder?ispName=22

new Rt(this).getParams() // {ispName: 22}

```
