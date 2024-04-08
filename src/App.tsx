import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { SidebarLayout } from "./layouts/SidebarLayout";
import { SidebarItems } from "./components/SidebarItems";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



function App() {

  return (
    <>
      <Router>
        <div>
          <nav className="flex items-center gap-3 flex-wrap p-6">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>

          <Route exact path="/about">
            <SidebarLayout
              sidebarContent={
                <SidebarItems />
              }
              mainContent={<div>About..</div>}
            />
          </Route>

          <Route exact path="/">
            <SidebarLayout
              sidebarContent={
                <SidebarItems />
              }
              mainContent={<div>Home..</div>}
            />
          </Route>
          <Switch>
            <Route exact path="/Dashboard">
              <SidebarLayout
                sidebarContent={
                  <SidebarItems />
                }
                mainContent={<div>Dashboard..</div>}
              />
            </Route>
            <Route exact path="/admin">
              <SidebarLayout
                sidebarContent={
                  <SidebarItems />
                }
                mainContent={<div><b>User List</b>
                  <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>

                </div>}
              />
            </Route>
            <Route exact path="/Organizations">
              <SidebarLayout
                sidebarContent={
                  <SidebarItems />
                }
                mainContent={<div>Organizations..</div>}
              />
            </Route>
            <Route exact path="/Contract History">
              <SidebarLayout
                sidebarContent={
                  <SidebarItems />
                }
                mainContent={<div>Contract History..</div>}
              />
            </Route>
            <Route exact path="/User Profile">
              <SidebarLayout
                sidebarContent={
                  <SidebarItems />
                }
                mainContent={<div>User Profile..</div>}
              />
            </Route>
          </Switch>
        </div>


      </Router>
    </>
  )
}

export default App
