import {
  Button,
  Flex,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { modalLabel } from '@data/localization/common/modal'
import useLang from '@hooks/useLang'
import { ReactNode } from 'react'
import { BsPrinter } from 'react-icons/bs'

// Define the prop types for the ModalBox component
interface IProps {
  isOpen: boolean
  setOpen: (data: boolean) => void
  title: string
  data?: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'full'
  type?: 'logout' | 'delete'
  confirm?: boolean
  setConfirm?: (data: boolean) => void
  onCloseComplete?: () => void
  isLoading?: boolean
  showPrint: boolean
  height?: string
}

// Define the ModalBox component
const ModalBox = (props: IProps) => {
  // Destructure the props
  const { isOpen, title, showPrint, height, setOpen, size, setConfirm, type, isLoading, data, onCloseComplete } = props

  // Get the onClose function from useDisclosure hook
  const { onClose } = useDisclosure()

  // Get the current language using the useLang hook
  const { lang } = useLang()

  // Function to handle printing the modal content
  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=2000,width=1000')
    const title = document.title
    const modalContent = document.querySelector('.modal_contain__section')?.innerHTML || ''

    printWindow?.document.write(`
          <html>
            <head>
              <title>${title}</title>
            </head>
            <body>
              <div class="modal_contain__section">${modalContent}</div>
            </body>
          </html>
        `)

    printWindow?.document.close()
    printWindow?.print()
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen} scrollBehavior={'inside'} onCloseComplete={onCloseComplete}>
      <ModalOverlay />
      <ModalContent
        minWidth={{
          lg: size === 'full' ? 'full' : size === 'sm' ? '40vw' : size === 'lg' ? '80vw' : '60vw',
          md: size === 'full' ? 'full' : size === 'lg' ? '98vw' : '80vw',
          base: size === 'full' ? 'full' : '98vw',
        }}
        maxHeight={height ?? '90vh'}
      >
        <ModalHeader
          fontSize={'15px'}
          display={'flex'}
          gap='10'
          justifyContent={'flex-start'}
          flexWrap={'wrap'}
          alignItems={'center'}
        >
          {/* Render the modal title */}
          {title}

          {/* Render the print button if showPrint is true */}
          {showPrint && (
            <Flex gap='2' pr='10'>
              <IconButton
                size='sm'
                variant='outline'
                colorScheme='teal'
                aria-label='Print'
                fontSize='20px'
                onClick={() => {
                  handlePrint()
                }}
                icon={<BsPrinter />}
              />
            </Flex>
          )}
        </ModalHeader>

        {/* Render the modal close button */}
        <ModalCloseButton
          onClick={() => {
            setOpen(false)
          }}
          _focus={{
            outline: 'none',
            boxShadow: 'none',
            svg: {
              fontSize: '11px',
            },
          }}
        />

        {/* Render the modal body */}
        <ModalBody className='modal_contain__section'>
          {/* Render content based on the specified type */}
          {type === 'logout' ? (
            <div>{modalLabel?.areYouSureToLogout?.[lang]}</div>
          ) : type === 'delete' ? (
            <div>{modalLabel?.areYouSureToDelete?.[lang]}</div>
          ) : (
            data
          )}
        </ModalBody>

        {/* Render modal footer based on type */}
        {type === 'delete' || type === 'logout' || type === 'verifyUser' || type === 'confirmEmployee' ? (
          <ModalFooter
            sx={{
              display: 'flex',
              gap: '1rem',
            }}
          >
            {/* Render cancel button */}
            <Button
              size='sm'
              colorScheme={'red'}
              variant='outline'
              onClick={() => {
                setOpen(false)
              }}
            >
              {modalLabel?.cancel?.[lang]}
            </Button>

            {/* Render confirm button */}
            <Button
              size='sm'
              variant='primary'
              isLoading={isLoading}
              loadingText={modalLabel?.loading?.[lang]}
              onClick={() => {
                if (setConfirm !== undefined) setConfirm(true)
              }}
            >
              {modalLabel?.confirm?.[lang]}
            </Button>
          </ModalFooter>
        ) : (
          ''
        )}
      </ModalContent>
    </Modal>
  )
}

// Set default prop values
ModalBox.defaultProps = {
  showPrint: false,
}

// Export the ModalBox component
export default ModalBox
