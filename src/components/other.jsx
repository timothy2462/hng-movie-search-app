// import tw from "lib/tailwind";
// import { useState } from "react";
// import { Platform, Text, TouchableOpacity, View } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import { Rect } from "react-native-popover-view/dist/Types";
// import DateRangePicker from "rn-select-date-range";

// import PopOver from "@/components/PopOver";
// import { Admission } from "@/types/admission";
// import { MaterialIcons } from "@expo/vector-icons";

// interface IResponse {
//   firstDate: string | moment.Moment;
//   secondDate: string | moment.Moment;
// }

// const statusList = ["outstanding", "paid"] as const;
// type Props = {
//   filterByDate?: (data: IResponse | null) => void;
//   filterByStatus?: (status: (typeof statusList)[number] | null) => void;
//   selectedRange?: IResponse;
//   billStatus?: Admission["admission_status"] | null;
// };

// export default function Filter({
//   filterByDate,
//   filterByStatus,
//   selectedRange,
//   billStatus,
// }: Props) {
//   const [openDropDown, setOpenDropdown] = useState(false);
//   const [dateFilterOpen, setDateFilterOpen] = useState(false);
//   const [statusFilterOpen, setStatusFilterOpen] = useState(false);

//   const [filters, setFilters] = useState<{
//     selectionRange: IResponse | null;
//     status: Admission["admission_status"] | null;
//   }>({
//     selectionRange: selectedRange || null,
//     status: billStatus || null,
//   });
//   const { selectionRange, status } = filters;

//   function resetFilter() {
//     filterByDate(null);
//     filterByStatus(null);
//   }

//   function filterFunction(
//     name: "selectionRange" | "treatment" | "status",
//     item: any
//   ) {
//     const newFilters = {
//       selectionRange: null,
//       status: null,
//       treatment: null,
//     };
//     newFilters[name] = item;
//     setFilters({
//       ...newFilters,
//     });
//   }

//   return (
//     <View style={tw``}>
//       <View style={tw`flex-row`}>
//         <TouchableOpacity
//           style={tw`flex-row justify-between px-2 items-center rounded-[8px] w-27 h-10 border border-neutral-100  ${
//             Platform.OS === "ios" ? "ml-5" : "ml-3"
//           } mt-4 text-neutral-100 mb-2`}
//           onPress={() => setOpenDropdown(true)}
//         >
//           <MaterialIcons name="filter-list" size={22} />
//           <Text>Filter</Text>
//           <MaterialIcons name="keyboard-arrow-down" size={22} />
//         </TouchableOpacity>
//         {(status || selectionRange) && (
//           <TouchableOpacity
//             style={tw`ml-4 mt-2 flex justify-center items-center`}
//             onPress={() => {
//               resetFilter();
//               setOpenDropdown(false);
//               filterFunction(null, null);
//             }}
//           >
//             <MaterialIcons name="close" size={22} />
//           </TouchableOpacity>
//         )}
//       </View>
//       <PopOver
//         popoverStyle={tw` ${dateFilterOpen ? "w-97" : "w-27"} `}
//         isVisible={openDropDown}
//         arrowShift={0}
//         arrowSize={{
//           width: 0,
//           height: 0,
//         }}
//         from={new Rect(Platform.OS === "android" ? 15 : 25, 210, 100, 40)}
//         onCloseComplete={() => {
//           setOpenDropdown(false);
//         }}
//         onRequestClose={() => {
//           setOpenDropdown(false);
//           setDateFilterOpen(false);
//           setStatusFilterOpen(false);
//         }}
//       >
//         {statusFilterOpen ? (
//           <ScrollView
//             contentContainerStyle={tw`flex-col rounded-xl gap-2 p-2 bg-white rounded-10 shadow`}
//           >
//             {statusList?.map((item) => (
//               <TouchableOpacity
//                 key={item}
//                 style={tw`flex-col justify-center items-center text-neutral-500 border-neutral-100 border border-neutral-100 py-2 rounded-[10px]`}
//                 onPress={() => {
//                   resetFilter();
//                   filterByStatus(item);
//                   filterFunction("status", item);
//                   setStatusFilterOpen(false);
//                   setOpenDropdown(false);
//                 }}
//               >
//                 <Text>{item}</Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         ) : dateFilterOpen ? (
//           <View style={tw`flex-1 justify-center items-center bg-white`}>
//             <View
//               style={tw`bg-white m-4 rounded-[10px] w-[90%] p-2.5  shadow-md`}
//             >
//               <DateRangePicker
//                 onSelectDateRange={(range) => {
//                   resetFilter();
//                   filterByDate(range);
//                   filterFunction("selectionRange", range);
//                   setDateFilterOpen(false);
//                   setOpenDropdown(false);
//                 }}
//                 blockSingleDateSelection={true}
//                 responseFormat="YYYY-MM-DD"
//               />
//             </View>
//           </View>
//         ) : (
//           <View style={tw`flex-col py-2 gap-2`}>
//             <TouchableOpacity
//               style={tw`flex-row justify-between px-2 items-center text-sm font-medium`}
//               onPress={() => {
//                 setDateFilterOpen(true);
//               }}
//             >
//               <Text style={tw``}>Date</Text>
//               <MaterialIcons name="keyboard-arrow-right" size={22} />
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={tw`flex-row justify-between px-2 items-center text-sm font-medium`}
//               onPress={() => {
//                 setStatusFilterOpen(true);
//               }}
//             >
//               <Text style={tw``}>Status</Text>
//               <MaterialIcons name="keyboard-arrow-right" size={22} />
//             </TouchableOpacity>
//           </View>
//         )}
//       </PopOver>
//     </View>
//   );
// }
