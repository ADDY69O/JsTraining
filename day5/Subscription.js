const routes = [
  {
    name: "M1",
    comp: "C1",
  },
  {
    name: "M2",
    comp: "C2",
  },
  {
    name: "M3",
    subComp: [
      {
        name: "M3A",
        comp: "C3A",
      },
      {
        name: "M3B",
        comp: "C3B",
      },
    ],
  },
  {
    name: "M4",
    subComp: [
      {
        name: "M4A",
        comp: "C4A",
      },
      {
        name: "M4B",
        comp: "C4B",
      },
    ],
  },
  {
    name: "M5",
    subComp: [
      {
        name: "M5A",
        comp: "C5A",
      },
      {
        name: "M5B",
        subComp: [
          {
            name: "M5BA",
            comp: "C5BA",
          },
          {
            name: "M5BB",
            comp: "C5BB",
          },
          {
            name: "M5BC",
            comp: "C5BC",
          },
        ],
      },
      {
        name: "M5C",
        comp: "C5C",
      },
    ],
  },
];

const subscription = [
  {
    name: "M1",
    isSub: true,
  },
  {
    name: "M2",
    isSub: false,
  },
  {
    name: "M3",
    isSub: false,
    subMod: [
      {
        name: "M3A",
        isSub: true,
      },
      {
        name: "M3B",
        isSub: true,
      },
    ],
  },
  {
    name: "M4",
    isSub: true,
    subMod: [
      {
        name: "M4A",
        isSub: false,
      },
      {
        name: "M4B",
        isSub: true,
      },
    ],
  },
  {
    name: "M5",
    isSub: true,
    subMod: [
      {
        name: "M5A",
        isSub: false,
      },
      {
        name: "M5B",
        isSub: true,

        subComp: [
          {
            name: "M5BA",
            isSub: false,
          },
          {
            name: "M5BB",
            isSub: true,
          },
          {
            name: "M5BC",
            isSub: false,
          },
        ],
      },
      {
        name: "M5C",
        isSub: true,
      },
    ],
  },
];

const subscriptionDataByRoute = (route, subscription) => {
  const data = subscription.filter(
    (routeSubscription) => routeSubscription.name == route.name
  );
  return data;
};

const moduleFalseComponents = (routes) => {
  const newData = [];
  for (let route of routes) {
    const newObj = new Object();
    newObj.name = route.name;
    if (route.comp) {
      newObj.comp = "UN";
    } else if (route.subComp) {
      newObj.subComp = [];
      newObj.subComp = moduleFalseComponents(route.subComp);
    }
    newData.push(newObj);
  }
  return newData;
};

const showSubscription = (routes, subscription) => {
  const resultData = [];
  for (let route of routes) {
    const subscriptionData = subscriptionDataByRoute(route, subscription);
    const routeObject = new Object();
    routeObject.name = route.name;

    if (
      subscriptionData[0].isSub == true &&
      resultData[0] &&
      !resultData[0].redirectedTo
    ) {
      const newObject = new Object();
      newObject.redirectedTo = route.name;
      resultData.unshift(newObject);
    }

    if (
      subscriptionData[0].isSub == true &&
      route.subComp &&
      subscriptionData[0].subMod
    ) {
      routeObject["subComp"] = [];
      routeObject.subComp = showSubscription(
        route.subComp,
        subscriptionData[0].subMod
      );
    } else if (subscription[0].isSub == false && route.subComp) {
      console.log(route.subComp);
      routeObject.subComp = moduleFalseComponents(route.subComp);
    } else if (route.comp && subscriptionData[0]) {
      routeObject.comp = subscriptionData[0].isSub == true ? route.comp : "UN";
    }
    resultData.push(routeObject);
  }
  return resultData;
};

const printData = (data) => {
  for (let ele of data) {
    if (Array.isArray(data[ele])) {
      printData(ele);
    } else {
      console.log(ele);
    }
  }
};

const data = showSubscription(routes, subscription);

console.log(" **************************");

printData(data);

console.log("**************************");
