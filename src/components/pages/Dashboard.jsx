import DashboardOverview from "./dashboard/DashboardOverview";

export default function Dashboard({ currentUser, setCurrentUser}) {
    return(
        <>
        <div className="flex-container">
            Dashbord landing page.
        </div>
        <DashboardOverview currentUser={currentUser} setCurrentUser={setCurrentUser} />
        
        </>
    )

}