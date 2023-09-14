import { useState, useEffect } from 'react'
import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList, Spacer, useToast } from '@chakra-ui/react'
import { navbarLabel } from '@data/localization/admin/navbar'
import { utilLabel, AdminRole } from '@data/localization/common/utils'
import EncryptDecrypt from '@functions/EncryptDecrypt'
import useAuth from '@hooks/useAuth'
import useLang from '@hooks/useLang'
import { userAccess } from '@type/global.types'
import LanguageToggle from '@ui/common/molecules/LanguageToggle'
import ModalBox from '@ui/common/molecules/Modal'
import { Colors } from '@utils/Colors'
import { HiOutlineChevronDown } from 'react-icons/hi'
import { MdOutlineLogout } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

/**
 * Navbar component for displaying user information and logout functionality.
 */
const Navbar = () => {
  // Hooks and state management
  const { user, setUser } = useAuth()
  const { decrypt } = EncryptDecrypt
  const adminDetails = decrypt(user) as userAccess
  const [open, setOpen] = useState<boolean>(false)
  const [confirm, setConfirm] = useState<boolean>(false)
  const navigate = useNavigate()
  const toast = useToast()
  const { lang } = useLang()
  const [loading, setLoading] = useState<boolean>(false)

  /**
   * Handles user logout.
   */
  const handleLogout = () => {
    setLoading(true)
    setUser('')
    toast.closeAll()
    toast({
      title: utilLabel?.success?.[lang],
      description: utilLabel?.logoutSuccessfully?.[lang],
      status: 'success',
      isClosable: true,
      duration: 2000,
    })
    setLoading(false)
    navigate('/auth/admin', {
      replace: true,
    })
  }

  useEffect(() => {
    if (confirm) {
      handleLogout()
      setConfirm(false)
      setOpen(false)
    }
  }, [confirm])

  return (
    <Box py='1' pl='2' pr='1' bg={Colors?.dashboardColor} width={'100%'}>
      <Flex
        direction='row'
        flexWrap={{
          md: 'nowrap',
          base: 'wrap',
        }}
        justifyContent='space-between'
        alignItems='center'
        gap='5'
      >
        {/* Display user role */}
        <Box
          textTransform='capitalize'
          display={{
            md: 'block',
            base: 'none',
          }}
          color='white'
        >
          {navbarLabel?.roleLevel?.[lang]} :
          <span
            style={{
              textTransform: 'capitalize',
              fontWeight: '500',
            }}
          >
            &nbsp; {adminDetails?.role && AdminRole?.[adminDetails?.role]?.[lang]}
          </span>
        </Box>

        <Spacer />

        {/* Language toggle */}
        <LanguageToggle />

        {/* User menu */}
        <Menu>
          <MenuButton size='sm' as={Button} rightIcon={<HiOutlineChevronDown />}>
            <Flex alignItems='center'>
              <span
                style={{
                  textTransform: 'capitalize',
                  width: '100%',
                }}
              >
                {/* Display user's name */}
                {adminDetails?.details
                  ? `
                    ${`${adminDetails?.details?.firstName?.[lang]} `}
                    ${adminDetails?.details?.middleName ? `${adminDetails?.details?.middleName?.[lang]} ` : ''}
                    ${`${adminDetails?.details?.lastName?.[lang]}`}
                    `
                  : 'xxxxx xxxxx'}
              </span>
            </Flex>
          </MenuButton>
          {/* User menu items */}
          <MenuList>
            <MenuItem
              icon={<MdOutlineLogout />}
              onClick={() => {
                setOpen(true)
              }}
            >
              {navbarLabel?.logout?.[lang]}
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      {/* Logout confirmation modal */}
      <ModalBox
        isOpen={open}
        setOpen={setOpen}
        title={navbarLabel?.logout?.[lang]}
        type='logout'
        data=''
        size='sm'
        confirm={confirm}
        isLoading={loading}
        setConfirm={setConfirm}
      />
    </Box>
  )
}

export default Navbar
