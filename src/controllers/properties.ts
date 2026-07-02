// import { useEffect, useState } from "react"
// import { propertyAPI } from "../api/properties"
// import { PropertyItem } from "../types/properties"

// export const useGetProperties = () => {

//   const [properties, setProperties] = useState<PropertyItem[]>([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     propertyAPI.getAllProperties(page).then(data => {
//       console.log("properties ", data)
//       setProperties([...properties, ...data.data])
//     });
//   }, [])

//   return {
//     properties
//   }

// }