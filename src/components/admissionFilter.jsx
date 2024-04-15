// import tw from "lib/tailwind";
// import { useState } from "react";
// import { Platform, Text, TouchableOpacity, View } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import { Rect } from "react-native-popover-view/dist/Types";
// import DateRangePicker from "rn-select-date-range";

// import PopOver from "@/components/PopOver";
// import { useTreatments } from "@/hooks/treatments";
// import { Admission } from "@/types/admission";
// import { Treatment } from "@/types/treatment";
// import { MaterialIcons } from "@expo/vector-icons";

// interface IResponse {
//   firstDate: string | moment.Moment;
//   secondDate: string | moment.Moment;
// }

// type Props = {
//   filterByDate?: (range: IResponse | null) => void;
//   filterByTreatment?: (treatment: Treatment | null) => void;
//   filterByStatus?: (status: string | null) => void;
//   statuses?: Admission["admission_status"] | undefined;
//   selectedRange?: IResponse;
//   treatmentss: Treatment | undefined;
// };

// const statusList = ["admitted", "discharged"] as const;

// export default function AdmissionsFilter({
//   filterByDate,
//   filterByTreatment,
//   filterByStatus,
//   statuses,
//   selectedRange,
//   treatmentss,
// }: Props) {
//   const [openDropDown, setOpenDropdown] = useState(false);
//   const [dateFilterOpen, setDateFilterOpen] = useState(false);
//   const [treatmentFilterOpen, setTreatmentFilterOpen] = useState(false);
//   const [statusFilterOpen, setStatusFilterOpen] = useState(false);
//   const { data: treatments } = useTreatments();

//   function resetFilter() {
//     filterByDate(null);
//     filterByTreatment(null);
//     filterByStatus(null);
//   }

//   const [filters, setFilters] = useState<{
//     selectionRange: IResponse | null;
//     treatment: Treatment | null;
//     status: Admission["admission_status"] | null;
//   }>({
//     selectionRange: selectedRange || null,
//     treatment: treatmentss || null,
//     status: statuses || null,
//   });
//   const { selectionRange, treatment, status } = filters;

//   function filterFunction(
//     name: "selectionRange" | "treatment" | "status",
//     item: any
//   ) {
//     const newFilters = {
//       selectionRange: null,
//       treatment: null,
//       status: null,
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
//           } mt-10 text-neutral-100 mb-4`}
//           onPress={() => setOpenDropdown(true)}
//         >
//           <MaterialIcons name="filter-list" size={22} />
//           <Text>Filter</Text>
//           <MaterialIcons name="keyboard-arrow-down" size={22} />
//         </TouchableOpacity>
//         {(selectionRange || treatment || status) && (
//           <TouchableOpacity
//             style={tw`ml-4 mt-5 flex justify-center items-center`}
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
//         popoverStyle={tw`${
//           treatmentFilterOpen ? "w-57" : dateFilterOpen ? "w-97" : "w-27"
//         } `}
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
//           setTreatmentFilterOpen(false);
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
//                   filterFunction("status", item);
//                   filterByStatus(item);
//                   setStatusFilterOpen(false);
//                   setOpenDropdown(false);
//                 }}
//               >
//                 <Text>{item}</Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         ) : treatmentFilterOpen ? (
//           <ScrollView
//             contentContainerStyle={tw`flex-col rounded-xl gap-2 p-2 bg-white rounded-10 shadow`}
//           >
//             {treatments?.items?.map((item) => (
//               <TouchableOpacity
//                 key={item.id}
//                 style={tw`flex-col justify-center items-center text-neutral-500 border-neutral-100 border border-neutral-100 py-2 rounded-[10px]`}
//                 onPress={() => {
//                   resetFilter();
//                   filterFunction("treatment", item);
//                   filterByTreatment(item);
//                   setTreatmentFilterOpen(false);
//                   setOpenDropdown(false);
//                 }}
//               >
//                 <Text> {item.treatment_name}</Text>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         ) : dateFilterOpen ? (
//           <View style={tw`flex-1 justify-center items-center bg-white`}>
//             <View
//               style={tw`bg-white m-4 rounded-[10px] w-[90%] p-2.5 shadow-md`}
//             >
//               <DateRangePicker
//                 onSelectDateRange={(range) => {
//                   resetFilter();
//                   filterFunction("selectionRange", range);
//                   filterByDate(range);
//                   setDateFilterOpen(false);
//                   setOpenDropdown(false);
//                 }}
//                 blockSingleDateSelection={true}
//                 responseFormat="MM-DD-YYYY"
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
//                 setTreatmentFilterOpen(true);
//               }}
//             >
//               <Text style={tw``}>Treatment</Text>
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
