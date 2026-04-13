import { Button } from "@/components/ui/button"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { PlusIcon, WorkflowIcon } from "lucide-react"

const Page = () => {
    return (
        <div className="min-h-auto">
            <div className="py-4">
                <div className="flex items-center justify-between mb-8"> 
                    <div>
                        <h1 className="text-4xl font text-foreground">Worflows</h1>
                        <p className="text-muted-foreground mt-1">
                            Build a chat agent workflow with custom logic and tools
                        </p>
                    </div>

                    <Button>
                        <PlusIcon size={18}/>
                        New Workflow
                    </Button>
                </div>

                <div>
                    <Empty>
                        <EmptyHeader>
                            <EmptyMedia variant="icon">
                                <WorkflowIcon/>
                            </EmptyMedia>
                            <EmptyTitle>No Workflows found</EmptyTitle>
                            <EmptyDescription>
                                You have not created 
                            </EmptyDescription>
                        </EmptyHeader>
                    </Empty>
                </div>
            </div>
        </div>
    )
}

export default Page
