import Header from "@/components/Header"
import { ClerkLoaded } from "@clerk/nextjs"

function DashBoardLayout({children}:{children:React.ReactNode}) {
    return (
        <ClerkLoaded>

            <div className="flex flex-col h-screen ">
                {/* Header */}
                <Header/>
<main className="flex-1 overflow-y-auto">
                {children}
                </main>
                </div>
            
        </ClerkLoaded>
    )
}

export default DashBoardLayout