// Import necessary modules and components from external libraries and local files.
import { ReactNode } from 'react'
import { Link as ReactLink, useLocation } from 'react-router-dom'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Icon,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import EncryptDecrypt from '@functions/EncryptDecrypt' // Import a module for encryption/decryption.
import useAuth from '@hooks/useAuth' // Import a custom hook for authentication.
import { userAccess } from '@type/global.types' // Import a custom user type.
import { Colors } from '@utils/Colors' // Import a utility for colors.

// Define the properties (props) that the SidebarItem component accepts.
interface IProps {
  minimize: boolean // Flag to minimize or expand the sidebar.
  title: string // The title or label for the menu item.
  link: string // The URL the menu item should navigate to.
  icon: ReactNode // React element (icon) for the menu item.
  roleLevel?: string[] | string // Optional user role(s) required to access the menu item.
  subMenu?: Array<{
    title: string
    link: string
    icon: ReactNode
    roleLevel?: string[] | string
  }> // Optional submenu items.
  openSubMenu: boolean // Flag to open or close the submenu.
}

// Define the SidebarItem component as a functional component.
const SidebarItem = (props: IProps) => {
  // Extract necessary data from the React Router's location object.
  const location = useLocation().pathname

  // Extract props for the menu item from the provided properties.
  const { title, minimize, link, icon, subMenu, roleLevel, openSubMenu } = props

  // Use the custom authentication hook to get user data.
  const { user } = useAuth()

  // Decrypt the user data using a custom encryption/decryption module.
  const { decrypt } = EncryptDecrypt

  // Cast the decrypted user data to a custom userAccess type.
  const userInfo = decrypt(user) as userAccess

  // Extract the user's role level from the decrypted user data.
  const adminRoleLevel = userInfo?.role

  // Determine if submenu items should be rendered based on user's role.
  const shouldRenderSubMenu = subMenu != null && subMenu?.length > 0
  const isSubMenuVisible = (adminRoleLevel && roleLevel?.includes(adminRoleLevel)) ?? roleLevel === undefined

  // Define a function to render the main menu item link.
  const renderLink = (
    title: string,
    minimize: boolean,
    link: string,
    icon: ReactNode,
    shouldRenderSubMenu: boolean
  ) => {
    return (
      <Link
        as={ReactLink}
        to={link}
        sx={{
          '&:hover': {
            textDecoration: 'none',
            color: 'white',
          },
        }}
      >
        <Box>
          <AccordionButton
            pb='2'
            sx={{
              '&:hover': {
                background: Colors?.dashboardHoverColor,
              },
            }}
          >
            <Flex
              as='span'
              flex='1'
              textAlign='left'
              alignItems='center'
              gap='2'
              color='white'
              sx={{
                svg: {
                  mb: '4px',
                },
              }}
            >
              {icon ?? <Icon />}
              {!minimize && title?.charAt(0)?.toUpperCase() + title.slice(1)?.toLowerCase()}
            </Flex>
            {!minimize && shouldRenderSubMenu && <AccordionIcon color='white' />}
          </AccordionButton>
        </Box>
      </Link>
    )
  }

  // Define a function to render the submenu items.
  const renderSubMenu = (subMenu: IProps['subMenu'], adminRoleLevel: string | undefined) => {
    return (
      <AccordionPanel mb={4} pb='0' color='white'>
        <List display='flex' flexDirection='column' gap='4'>
          {subMenu &&
            subMenu?.length > 0 &&
            subMenu.map((item, index: number) => {
              return (
                ((adminRoleLevel && item.roleLevel?.includes(adminRoleLevel)) ?? item.roleLevel === undefined) && (
                  <Link
                    key={index}
                    as={ReactLink}
                    to={item?.link}
                    sx={{
                      '&:hover': {
                        textDecoration: 'none',
                        color: 'white',
                      },
                    }}
                  >
                    <ListItem
                      key={index}
                      display='flex'
                      alignItems='center'
                      gap='2'
                      ms={minimize ? 0 : 5}
                      sx={{
                        '&:hover': {
                          color: 'gray',
                        },
                        svg: {
                          mb: '4px',
                        },
                      }}
                      color={location?.endsWith(item?.link) ? 'gray' : ''}
                    >
                      {item?.icon ?? <Icon />}
                      {!minimize && item?.title?.charAt(0)?.toUpperCase() + item?.title.slice(1)?.toLowerCase()}
                    </ListItem>
                  </Link>
                )
              )
            })}
        </List>
      </AccordionPanel>
    )
  }

  // Render the SidebarItem component.
  return (
    <div>
      {isSubMenuVisible && (
        <Accordion
          allowMultiple
          width={'100%'}
          defaultIndex={openSubMenu ? [0] : []}
          bg={location === link ? Colors?.dashboardHoverColor : ''}
        >
          <AccordionItem border={'0'} my='1'>
            {renderLink(title, minimize, link, icon, shouldRenderSubMenu)}
            {shouldRenderSubMenu && renderSubMenu(subMenu, adminRoleLevel)}
          </AccordionItem>
        </Accordion>
      )}
    </div>
  )
}

// Set default prop values for the SidebarItem component.
SidebarItem.defaultProps = {
  openSubMenu: false,
  minimize: false,
}

// Export the SidebarItem component as the default export.
export default SidebarItem
