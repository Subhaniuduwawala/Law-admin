   M S B A M L   `   `   `  ����  Law_Admin_dekstop!    Law_Admin_dekstop.AdminPage   5   	   W SPresentationCore, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=9.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=9.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$!  Admin - Manage Appointments��5   	   $	��600��6-   $	��800��6:    � WindowStartupLocation$ CenterScreen=�6F   .��5      � $��20q�6   .+�5   
   �� .+�5      �� $��Manage Appointments��6   $��24(�63   $
��Bold"�6A   $��Center=�6S   $��0,0,0,20q�6p   &   System.Windows.Controls.DataGrid  5      -   5          Name$ AppointmentDataGrid��5         AutoGenerateColumns$ False��5         
IsReadOnly$
 True��5         SelectionMode$ Single=�5      $	��400��5      $
��0,10q�6$      Columns 5      0  *System.Windows.Controls.DataGridTextColumn  5      ,  &System.Windows.Controls.DataGridColumn   Header$ ID��6)      Width5  /System.Windows.Controls.DataGridLengthConverter$ 50 6L   1  +System.Windows.Controls.DataGridBoundColumn	   Binding	 65   �� *Id+6L     5      $
 Name��6)   $	 150 6P   	 67   �� *Name+6P     5      $ Email��6)   $	 200 6R   	 68   �� *Email+6R     5      $
 Date��6)   $	 100 6[   	 67   �� *AppointmentDate+6[     5      $
 Time��6)   $	 100 6T   	 67   �� *
TimeSlot+6T     5      $ Law Type��6)   $	 100 6W   	 6;   �� *	LawType+6W     5      $ Lawyer��6)   $	 100 6T   	 69   �� *Lawyer+6T   5      �� 5      
 �� Orientation$
 
Horizontal=�6   $��Center=�62   $��0,20,0,0q�6O   .+�5      �� -   5        $��Refresh��5      $	��100��6M   
��� ���
�������$��14(�5   @   $
��Bold"�6N   $
��10,0q�6`   �� 5      -   5        $
��Edit��5      $	��100��6F   
����  �
�������$��14(�5    >   $
��Bold"�6L   $
��10,0q�6^   �� 5!      -   5        $��Delete��5!      $	��100��6J   
���  ��
�������$��14(�5"   =   $
��Bold"�6K   $
��10,0q�6]   5#      5$      5%      5&      