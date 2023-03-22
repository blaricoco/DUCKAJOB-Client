export default function StatusParser (statusID: string) {

    var status = "";

    switch(statusID) {

    case "0":
        status = "Unfunded";
        break;
    case "1":
        status = "Funded";
        break;
    case "2":
        status = "Delivered";
        break;
    case "3":
        status = "Accepted";
        break;
    case "4":
        status = "Dispute";
        break;
    case "5":
        status = "Cancelled";
        break;
    case "6":
        status = "Resolve";
        break;
    default:
        status = "Unfunded";
    }
    return status;
}