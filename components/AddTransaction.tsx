import { Modal, View, Text, Pressable, StyleSheet, Button, TextInput } from 'react-native';
import { PropsWithChildren, useState } from 'react';
import { useFinance } from '@/hooks/FinanceContex';

type Props = PropsWithChildren<{
  isVisible: false,
  type: 'ingreso' | 'egreso',
  onClose: () => void,
}>

export function FormAddTransaction({ isVisible, type, onClose }: Props) {
  const { agregarTransaccion: addTransaction } = useFinance()
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    if (!description.trim() || !amount.trim()) {
      return alert('Completa todos los campos');
    }

    addTransaction({
      type,
      description,
      amount: parseFloat(amount),
    });

    setDescription('');
    setAmount('');
    onClose();

  }

  return (
    <View>
      <Modal>
        <TextInput
          value={description}
          onChangeText={setDescription}
        />

        <TextInput
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />

      </Modal>
    </View>
  )
}

const style = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
})
